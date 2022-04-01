var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var jwt = require('jsonwebtoken')
var app = express();
var card = require("./api/v1/controllers/card")
var Signup =require("./api/v1/controllers/signup");
var login =require("./api/v1/controllers/login");

app.use(bodyParser());
app.use(bodyParser());
app.use(cors());


app.get("/card", card);
app.post("/signup", Signup);
app.post("/login", login);


mongoose.connect("mongodb+srv://mehdi:Mehdi@cluster0.hv3w0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(db => {
        console.log("Database connected")
    }).catch((error) => {
        console.log(error);
      });
    


app.listen(777);