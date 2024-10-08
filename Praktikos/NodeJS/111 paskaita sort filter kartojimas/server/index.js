import express from "express";
import { MongoClient } from "mongodb";
import cors from 'cors';
import 'dotenv/config';

const app = express();
const corsOptions = {
  origin: `http://localhost:${process.env.FRONT_PORT}`
};
const PORT = process.env.SERVER_PORT;
const DB_CONNECTION = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.${process.env.CLUSTER_ID}.mongodb.net/`;

app.use(express.json());
app.use(cors(corsOptions));

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

// routes

// get 50 movies (without aggregation)
app.get('/movies', async (req, res) => {
  const settings = {
    filter: { },
    order: { },
    skip: 0,
    limit: 50
  };
  const client = await MongoClient.connect(DB_CONNECTION);
  const data = await client.db('sample_mflix').collection('movies').find(settings.filter).sort(settings.order).skip(settings.skip).limit(settings.limit).toArray();
  client.close();
  res.send(data);
});
// get 50 movies (with aggregation)
app.get('/moviesA', async (req, res) => {
  const settings = {
    filter: { },
    order: { },
    skip: 0,
    limit: 50
  };
  if(Object.keys(req.query).length){
    Object.keys(req.query).forEach(key => {
      // console.log(req.query);
      const keyValue0 = key.split('_')[0]; // sort arba filter
      if(keyValue0 === 'sort'){ 
        settings.order = { [key.split('_')[1]]: Number(req.query[key]) };
      } else if(keyValue0 === 'filter'){
        if(!key.split('_')[2]){ // jeigu nėra lte/gte/lt/gt ir pns
          settings.filter[key.split('_')[1]] = { $regex: new RegExp(req.query[key], 'i') } 
        } else { // jeigu yra lte/gte/lt/gt/in ir pns
          const option = '$'+key.split('_')[2]; // lte/gte/lt/gt
          if(!settings.filter[key.split('_')[1]]){ // jeigu neegzistuoja toks raktas jį sukuria
            if(key.split('_')[1] === 'genres'){
              settings.filter[key.split('_')[1]] = { [option]: req.query[key].split(',') };
            } else {
              settings.filter[key.split('_')[1]] = { [option]: Number(req.query[key]) };
            }
          } else { // jeigu egzistuoja - jį papildo
            settings.filter[key.split('_')[1]][option] = Number(req.query[key]);
          }
        }
      }
    });
  }
  // console.log(settings);
  const client = await MongoClient.connect(DB_CONNECTION);
  const data = await client.db('sample_mflix').collection('movies').aggregate([
    { $match: settings.filter },
    Object.keys(settings.order).length ? { $sort: settings.order } : { $sort: { title: 1 } },
    { $skip: settings.skip },
    { $limit: settings.limit }
  ]).toArray();
  client.close();
  res.send(data);
});

// Indres pasiūlymas
app.get('/moviesI', async (req, res) => {
  const minYear = parseInt(req.query.minYear) || 0;
  const maxYear = parseInt(req.query.maxYear) || 9999;
  const genre = req.query.genre || 'Action, Comedy, Romance';  // Default genre is 'Action';
  
  try {
    const client = await MongoClient.connect(DB_CONNECTION);
    const coll = client.db('sample_mflix').collection('movies');
    
    const pipeline = [
      {
        $match: {
          year: { $gte: minYear, $lte: maxYear },  // Filter by year range
          genres: { $in: genre.split(',').map(el => el.trim()) },  // Filter by genre (case-insensitive)
        }
      },
      { $project: { title: 1, runtime: 1, year: 1, plot: 1, cast: 1, genres: 1, directors: 1 } }  // Select specific fields
    ];

    const movies = await coll.aggregate(pipeline).toArray();
    
    client.close();
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching filtered movies' });
  }
});