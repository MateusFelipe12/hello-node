// server.ts
import express from "express";

const server = express();

server.get('/', (req, res) => {
  return res.send('Olá, DEV!');
});

export default server;