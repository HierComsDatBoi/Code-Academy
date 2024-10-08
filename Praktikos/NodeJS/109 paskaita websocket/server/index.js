import express from "express";
import { Server } from "socket.io";
import cors from 'cors';
import http from 'http';

const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {cors: {origin: 'http://localhost:3000'}});

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

httpServer.listen(5500, ()=> console.log('http://localhost:5500'));

io.on('connection', (socketInfo) => {
  socketInfo.on('send', (data)=>{
    console.log(data);
    socketInfo.broadcast.emit('receive')
  })

});