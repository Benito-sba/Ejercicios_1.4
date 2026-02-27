/*Benito Santiago Balam Acevedo*/
/* AA 1.4 Framework JS */


import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a mi página web</h1>");
});

app.get('/saludo', (req, res) => {
  res.send('Balam endpoint /saludo');
});

app.get('/usuario', (req, res) => {
  res.json({ nombre: 'Santiago', carrera: 'ISC' });
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
}
);
