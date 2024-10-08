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

app.listen(PORT, () => { console.log(`Server is running on PORT:${PORT}`) });

// locations routes
app.get('/locations', async (req, res) => {
  const client = await MongoClient.connect(DB_CONNECTION);
  const data = await client.db('full_stack-mini_project').collection('locations').find().toArray();
  await client.close();
  res.send(data);
});
app.get('/locations/:id', async (req, res) => {
  let filter = { "_id": req.params.id };
  const client = await MongoClient.connect(DB_CONNECTION);
  const data = await client.db('full_stack-mini_project').collection("locations").findOne(filter);
  await client.close();
  res.send(data);
});
app.delete('/locations/:id', async (req, res) => {
  let filter = { "_id": req.params.id };
  const client = await MongoClient.connect(DB_CONNECTION);
  const deletionResponse = await client.db('full_stack-mini_project').collection("locations").deleteOne(filter);
  await client.close();
  res.send(deletionResponse);
});
app.post('/locations', async (req, res) => {
  const newLocation = {
    // ...req.body, // tik jeigu req body labai tvarkingas
    _id: generateID(),
    name: req.body.name,
    country: req.body.country,
    description: req.body.description,
    location: req.body.location
  };
  const client = await MongoClient.connect(DB_CONNECTION);
  const postResponse = await client.db('full_stack-mini_project').collection("locations").insertOne(newLocation);
  await client.close();
  res.send(postResponse);
});
app.patch('/locations/:id', async (req, res) => {
  let filter = { "_id": req.params.id };
  const client = await MongoClient.connect(DB_CONNECTION);
  const patchResponse = await client.db('full_stack-mini_project').collection("locations").updateOne(filter, { $set: req.body });
  await client.close();
  res.send(patchResponse);
});
app.put('/locations/:id', async (req, res) => {
  let filter = { "_id": req.params.id };
  const client = await MongoClient.connect(DB_CONNECTION);
  const putResponse = await client.db('full_stack-mini_project').collection("locations").replaceOne(filter, req.body);
  await client.close();
  res.send(putResponse);
});