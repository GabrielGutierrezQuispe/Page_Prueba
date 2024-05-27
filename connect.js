// Módulos requeridos
const express = require('express');
const http = require('http');
var compression = require('compression');
require('dotenv').config();
const {v4: uuidv4} = require('uuid');
const cors = require('cors');

const app = express();
app.use(compression());
app.use(cors());

// Servidor HTTP
const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
serverHttp.on('listening', () => console.info(`Notes App running at http://${process.env.IP}:${process.env.HTTP_PORT}`));

// Contenido estático
app.use(express.static('./public'));
