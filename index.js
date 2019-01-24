const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose
    .connect('mongodb://localhost@localhost:27017/devconnector')
    .then(()=>{console.log("connected to mongo")})
    .catch((err)=>{console.log("error", err)});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const middleWare = require('./middleware');
const routes = require('./routes');

middleWare(app);
routes(app);

app.listen(5000, ()=> {
    console.log("server started");
});

