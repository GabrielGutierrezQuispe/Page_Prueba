var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
  host: "localhost",
  user: "gabriel",
  password: "gabriel4132",
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
            res.send(data);
        }
    });
});