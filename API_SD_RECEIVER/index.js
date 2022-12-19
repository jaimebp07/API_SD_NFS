const express = require('express')
const fs = require("fs");
const app = express();
var os = require("os");
arrayMessagge = [];

app.use(express.json());

app.post('/info', (req, res) => {
    recepcion = Date.now()
    recive_data = req.body
    envio = recive_data.send
    latencia = recepcion - envio 
    data = {"mensaje":req.query.message, "equipo":os.hostname(), "hora_envio":recive_data.date,  "latencia":latencia}
    arrayMessagge.push(data)
    res.send(data)
});

app.get('/info', (req, res) => {
    res.send(arrayMessagge)
})

const port = process.env.port || 30012;
app.listen(port, () => console.log(`Escuchando en el puerto ${port} ....`));