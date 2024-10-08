import express from 'express';
import 'dotenv/config';
import mysql from 'mysql';
import { v4 as generateID } from 'uuid';

const PORT = process.env.PORT;
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS
});

const app = express();
app.use(express.json());

// db.connect((err)=>{
//   if(err){
//     console.log('Failed to connect to DB', err.message);
//     return;
//   }
//   console.log('Successfully connected to DB');
// });

app.listen(PORT, () => { console.log(`Server is running on ${PORT} PORT`) });

// visi lėktuvai
app.get('/airplanes', (req, res) => {
  let queryString = `SELECT * FROM AIRPLANE`;
  console.log(req.query);
  if(req.query.airline_id){
    queryString = `
      SELECT AIRPLANE.name as airplane_name, AIRPLANE.capacity as airplane_capacity, AIRLINE.name AS airline_name
      FROM AIRPLANE JOIN AIRLINE
      ON AIRPLANE.airline_id = AIRLINE.id
      WHERE AIRPLANE.airline_id = '${req.query.airline_id}'
    `;
  }
  if(req.query.sort){
    queryString += `
      ORDER BY ${req.query.sort}
    `;
  }
  
  db.query(queryString, (err, results) => {
    if(err){
      return res.status(500).send(`Error fetching data: ${err.message}`);
    }
    res.send(results);
  });
});
// lėktuvas pagal id kuris paduotas parametro pavidalu
app.get('/airplanes/:id', (req, res) => {
  let queryString = `
    SELECT * FROM AIRPLANE 
    WHERE AIRPLANE.id='${req.params.id}'
  `;
  db.query(queryString, (err, results) => {
    if(err){
      return res.status(500).send(`Error fetching data: ${err.message}`);
    }
    res.send(results);
  });
});
// lėktuvai priklausantys oro linijai, kurios id paduotas kaip query parametras
app.get('/airplanesB', (req, res) => {
  // console.log(req.query.airline_id);
  let queryString = `
    SELECT AIRPLANE.name as airplane_name, AIRPLANE.capacity as airplane_capacity, AIRLINE.name AS airline_name
    FROM AIRPLANE JOIN AIRLINE
    ON AIRPLANE.airline_id = AIRLINE.id
    WHERE AIRPLANE.airline_id = '${req.query.airline_id}'
  `;
  db.query(queryString, (err, results) => {
    if(err){
      return res.status(500).send(`Error fetching data: ${err.message}`);
    }
    res.send(results);
  });
});
app.post('/airplanes', (req, res) => {
  console.log(req.body);
  const newId = generateID();
  let queryString = `
    INSERT INTO AIRPLANE (id, name, capacity, airline_id) VALUES
    ('${newId}' ,'${req.body.name}', ${req.body.capacity}, '${req.body.airline_id}')
  `;
  db.query(queryString, (err, results) => {
    if(err){
      return res.status(500).send(`Error inserting data: ${err.message}`);
    }
    res.send({ newId: newId });
  });
});