var express = require("express");
var mysql = require("mysql");
var http = require("http");
var compression = require("compression");
require('dotenv').config();
const {v4: uuidv4} = require('uuid');
var cors = require("cors");

var app = express();
app.use(express.json());
app.use(cors());
app.use(compression());

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "conexion",
});

conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conexión exitosa");
  }
});

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

app.post("/api/contac", (req, res) => {
  let data = {
      NAAMES: req.body.NAAMES,
      SUBJECTS: req.body.SUBJECTS,
      EMAIL: req.body.EMAIL,
      DESCRIPTION: req.body.DESCRIPTION
  };
  let sql = "INSERT INTO contac SET ?";
  conexion.query(sql, data, function (error, results) {
      if (error) {
          throw error;
      } else {
          console.log(data);
      }
  });
});

// Servidor HTTP
const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
serverHttp.on('listening', () => console.info(`Notes App running at http://${process.env.IP}:${process.env.HTTP_PORT}`));

// Contenido estático
app.use(express.static('./public'));