import express from 'express';
import cors from 'cors';

import { partijos } from './data.js';

const app = express();
app.use(express.json());
app.use(cors());



app.listen(5000, () => { console.log('http://localhost:5000/') });

app.get('/data/partijos', (req, res) => {
  res.send(partijos);
});