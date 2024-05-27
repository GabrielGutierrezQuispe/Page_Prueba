var express = require("express");
var http = require("http");
var compression = require("compression");
require('dotenv').config();
var cors = require("cors");

var app = express();
app.use(express.json());
app.use(cors());
app.use(compression());

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

// Servidor HTTP
const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
serverHttp.on('listening', () => console.info(`Notes App running at http://${process.env.IP}:${process.env.HTTP_PORT}`));

// Contenido estático
app.use(express.static('./public'));