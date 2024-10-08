import cors from 'cors';
import express from 'express';
import { MongoClient } from 'mongodb';
import 'dotenv/config'

const PORT = process.env.SERVER_PORT;
const CONNECT = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.${process.env.CLUSTER_ID}.mongodb.net/`


const app = express();
app.use(express.json());
app.listen(PORT, () => { console.log(`http://localhost:${PORT}`) });

app.get('/users', async (req, res) => {
  let client;
  try {
    let filter = {};
    client = await MongoClient.connect(CONNECT);
    const result = await client.db('dvi_kolekcijos').collection('users').find(filter).toArray();
    res.send(result)
  } catch (error) {
    console.error(error);
    res.status(500).sendStatus("error occured")
  } finally {
    if (client) {
      await client.close();
    }
  }
});

app.get('/posts', async (req, res) => {
  let client;
  try {
    let filter = {};
    client = await MongoClient.connect(CONNECT);
    const result = await client.db('dvi_kolekcijos').collection('posts').find(filter).toArray();
    res.send(result)
  } catch (error) {
    console.error(error);
    res.status(500).sendStatus("error occured")
  } finally {
    if (client) {
      await client.close();
    }
  }
});

app.get('/posts/:id', async (req, res) => {
  let client;
  try {
    let id = req.params.id;
    client = await MongoClient.connect(CONNECT);
    const result = await client.db('dvi_kolekcijos').collection('posts').findOne({ "_id": id });
    res.send(result)
  } catch (error) {
    console.error(error);
    res.status(500).sendStatus("error occured")
  } finally {
    if (client) {
      await client.close();
    }
  }
});

app.get('/users/:id', async (req, res) => {
  let client;
  try {
    let id = req.params.id;
    client = await MongoClient.connect(CONNECT);
    const result = await client.db('dvi_kolekcijos').collection('users').findOne({ "_id": id });
    res.send(result)
  } catch (error) {
    console.error(error);
    res.status(500).sendStatus("error occured")
  } finally {
    if (client) {
      await client.close();
    }
  }
});

//post by user id
app.get('/postsByUser/:userId', async (req, res) => {
  let client;
  try {
    let id = req.params.userId;
    client = await MongoClient.connect(CONNECT);
    const result = await client.db('dvi_kolekcijos').collection('users').aggregate([
      { $match: { _id: id } },
      {
        $lookup: {
          from: 'posts', // is kurios kolekcijos
          localField: '_id', // naudojant identifikatoriu
          foreignField: 'userId', // is sito kolekcijos lauko
          as: 'userPosts' // grazins situ pavadinimu masyva
        }
      }
    ]).toArray();
    res.send(result)
  } catch (error) {
    console.error(error);
    res.status(500).sendStatus("error occured")
  } finally {
    if (client) {
      await client.close();
    }
  }
});

//post with user info
app.get('/userByPost/:postId', async (req, res) => {
  let client;
  try {
    let id = req.params.postId;
    client = await MongoClient.connect(CONNECT);
    const result = await client.db('dvi_kolekcijos').collection('posts').aggregate([
      { $match: { _id: id } },
      {
        $lookup: {
          from: 'users', // is kurios kolekcijos
          localField: 'userId', // naudojant identifikatoriu
          foreignField: '_id', // is sito kolekcijos lauko
          as: 'userInfo' // grazins situ pavadinimu masyva
        }
      }
    ]).toArray();
    res.send(result)
  } catch (error) {
    console.error(error);
    res.status(500).sendStatus("error occured")
  } finally {
    if (client) {
      await client.close();
    }
  }
});