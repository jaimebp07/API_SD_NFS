const express = require('express')
const fs = require("fs");
const app = express();
var os = require("os");

app.use(express.json());

app.get('/info', (req, res) => {
    fs.readFile("data/members.txt", (err, data) => {
        if (err) return console.error(err);
        res.send({"Menbers ":data.toString()})
    });
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port} ....`));
