import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import { v4 as generateID } from 'uuid';

const PORT = process.env.SERVER_PORT;
const DB_CONNECTION = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.${process.env.CLUSTER_ID}.mongodb.net/`;
const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => { console.log(`http://localhost:${PORT}`) });

app.get('/pets', async (req, res) => {
  const client = await MongoClient.connect(DB_CONNECTION);
  const filter = {};
  const sort = {'age': -1};
  const data = await client.db(process.env.DB_NAME).collection('pets').find(filter, {sort}).toArray();
  await client.close();
  console.log(data);
  res.send(data);
});

app.post('/pets', async (req, res) => {
  const newPet = {
    _id: generateID(),
    name: req.body.name,
    type: req.body.type,
    age: req.body.age
  };
  const client = await MongoClient.connect(DB_CONNECTION);
  const postResponse = await client.db('PetsDB').collection("pets").insertOne(newPet);
  await client.close();
  res.send(postResponse);
});

app.get('/pets/:type', async (req, res) => {
  const client = await MongoClient.connect(DB_CONNECTION);
  const filter = {
    "type": req.params.type };
    const sort = {'age': -1}
  const data = await client.db(process.env.DB_NAME).collection('pets').find(filter,  {sort}).toArray();
  await client.close();
  // console.log(data);
  res.send(data);
});



// GET by type /pets/:type, kuris dinaminis ir paduoda įrašyto tipo gyvūnus (pvz tik šunis)

// GET by age descending /pets/byoldest, kuris paduoda visus gyvūnus, nuo seniausio iki jauniausio.