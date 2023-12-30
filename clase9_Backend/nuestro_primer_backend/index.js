const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

const uri = "mongodb://localhost:27017";

const addDateMiddleware = (req, res, next) => {
  // Agregarle la fecha a la respuesta
  res.date = new Date();
  next();
};

app.use(addDateMiddleware);

app.get("/", (req, res) => {
  res.json({
    mensaje: "Hola!",
    hora: res.date,
  });
});

app.get("/date", (req, res) => {
  res.send(new Date());
});

app.get("/profesor", (req, res) => {
  res.json({
    nombre: {
      pila: "Lautaro",
      segundo: "Jorge",
      apellido: "Garcia",
    },
    cargo: "Profesor",
    hora: res.date,
  });
});

app.get("/alumnos", async (req, res) => {
  // Obtener los alumnos de la base de datos
  const resultado_BaseDeDatos = await database
    .collection("Alumnos")
    .findOne({ nombre: "Marcos" });
  res.json({
    alumno: resultado_BaseDeDatos
  });
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
const database = client.db("ed_it_poc_mongo");

async function run() {
  // Connect the client to the server (optional starting in v4.7)
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
}
run()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Example app listening on port 3000`);
    });
  })
  .catch(console.dir);
