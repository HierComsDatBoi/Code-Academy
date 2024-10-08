import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';


const app = express();
const PORT = process.env.SERVER_PORT;

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(express.json());
app.use(cors(corsOptions));
app.listen(PORT, () => console.log(`https://localhost:${PORT}`));

const authMid = (req, res, next) => {
  // console.log(req.headers);
  if(req.header.authorization){
    const token = req.header.authorization.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err){
        res.status(400).send(err)
      } else {
        console.log(decoded);
        return next();
      }
    })
  }
};

//route visiems
app.get('/homeInfo', (req, res) => {
  res.send({ info: 'kazkokia info' })
});

// route autentifikuotiems JWT
app.get('/secret', authMid, (req, res) => {
  res.send({ secretInfo: process.env.TOKEN_SECRET });
});

app.post('/login', (req, res) => {
  //patikrinimas ar vartotojas egzistuoja

  if (true) {
    //sukuriamas jwt
    const token = jwt.sign({username: 'Dainius', password: 'AaaaA444', role: 'user'}, process.env.TOKEN_SECRET);
    res.send(token);
  } else {
    res.send(error);
  }
});


