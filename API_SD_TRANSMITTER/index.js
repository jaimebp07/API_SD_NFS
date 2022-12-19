const axios = require('axios');
const express = require('express')
const app = express();
var os = require("os");
const {performance} = require('node:perf_hooks');

app.post('/info', (req, res) => {
    data = {"message":req.query.message, "name":os.hostname(), "send": Date.now(), "date":new Date().toLocaleString()}
    axios.post(req.query.url, data)
    res.send("OK")
});

const port = process.env.port || 30011;
app.listen(port, () => console.log(`Escuchando en el puerto ${port} ....`));