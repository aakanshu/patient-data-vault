const express = require("express");
const config = require("./config/config.json");
const app = express();
var authentication = require('./middlewares/authentication');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,accesstokenid');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function(req, res) {
    res.status(200).send({status: "Ok"});
});
// app.use(authentication);

const port = config.port;

app.listen(port, () => console.info(`Service running on port: ${port}`));
