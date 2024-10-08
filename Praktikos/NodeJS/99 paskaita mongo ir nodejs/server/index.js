import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config';

const PORT = process.env.BACK_END_PORT || 5501;
const DB_CONNECT = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER_NAME}.${process.env.DB_CLUSTER_ID}.mongodb.net/`;

const app = express();
app.use(express.json());

app.listen(PORT, () => { console.log(`Server is running on ${PORT} port`) });

// music_bands
app.get('/bands', async (req, res) => {
  let filter = {};
  const numberConditions = ['gte', 'gt', 'lte', 'lt'];
  const reqQueryArray = Object.keys(req.query);
  console.log(reqQueryArray);
  if (reqQueryArray.length) {
    reqQueryArray.forEach(item => {
      console.log('raktinis zodis:' + item, 'reiksme:' + req.query[item]);
      const [name, condition] = item.split('_');
      console.log(name, condition, req.query[item]);

      if (!filter[name] && condition) {
        filter[name] = {};
      }
      condition ? filter[name]['$' + condition] = numberConditions.includes(condition) ? Number(req.query[item]) : JSON.parse(req.query[item]) : filter[name] = JSON.parse(req.query[item]);

    });
    console.log(filter);
  }
  const client = await MongoClient.connect(DB_CONNECT);
  const data = await client.db('MyBase').collection('music_bands').find(filter).toArray();
  await client.close();
  res.send(data);
});
app.get('/bands/:id', async (req, res) => {
  let filter = { "_id": new ObjectId(req.params.id) };
  const client = await MongoClient.connect(DB_CONNECT);
  const data = await client.db('MyBase').collection('music_bands').findOne(filter);
  await client.close();
  res.send(data);
});
app.delete('/bands/:id', async (req, res) => {
  let filter = { "_id": new ObjectId(req.params.id) };
  const client = await MongoClient.connect(DB_CONNECT);
  const deletionResponse = await client.db('MyBase').collection('music_bands').deleteOne(filter);
  await client.close();
  res.send(deletionResponse);
});
app.post('/bands/', async (req, res) => {
  // let filter = { "_id": new ObjectId(req.params.id) };
  let update = {
    "name": req.body.name,
    "style": req.body.style,
    "foundedYear": req.body.foundedYear,
    "members": req.body.members
  };
  const client = await MongoClient.connect(DB_CONNECT);
  const data = await client.db('MyBase').collection('music_bands').insertOne(update);
  await client.close();
  res.send(data);
});

app.patch('/bands/:id', async (req, res) => {
  let filter = { "_id": new ObjectId(req.params.id) };
  const client = await MongoClient.connect(DB_CONNECT);
  const data = await client.db('MyBase').collection('music_bands')
  .updateOne(filter, {$set: req.body});
  await client.close();
  res.send(data);
});

app.put('/bands/:id', async (req, res) => {
  let filter = { "_id": new ObjectId(req.params.id) };
  const client = await MongoClient.connect(DB_CONNECT);
  const data = await client.db('MyBase').collection('music_bands')
  .replaceOne(filter, req.body);
  await client.close();
  res.send(data);
});