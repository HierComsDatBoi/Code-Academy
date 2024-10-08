import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import {users, deleteUser, editUser} from './data.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(5000, () => {
  console.log("http://localhost:5000 listening");
});

//Privaloma ^^

//routingas vv

app.get("/", (req, res) => {
  // res.send("Hjello Index");
  res.sendFile("./pages/home.html", { root : __dirname});
});

app.get("/about", (req, res) => {
  // res.send("Hjelo About");
  res.sendFile("./pages/about.html", { root: __dirname})
});

app.get("/data/users", (req, res) => {
  res.send(users);

});




// error 404 turi buti apacioje

app.use( (req, res) => {
  res.sendFile("/pages/error.html", {root: __dirname});
});