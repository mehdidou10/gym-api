var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var jwt = require('jsonwebtoken')
var app = express();
var card = require("./api/v1/controllers/card")
var Signup =require("./api/v1/controllers/signup");
var login =require("./api/v1/controllers/login");
var coaches = require("./api/v1/controllers/coaches");
var produits = require("./api/v1/controllers/produits");
var produits2 = require("./api/v1/controllers/produits2");
app.use(bodyParser());

app.use(cors());
app.get("/produits2",produits2)
app.get("/produits",produits)
app.get("/card", card);
app.post("/signup", Signup);
app.post("/login", login);
app.get("/coaches",coaches);

mongoose.connect("mongodb+srv://mehdi:Mehdi@cluster0.hv3w0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(db => {
        console.log("Database connected")
    }).catch((error) => {
        console.log(error);
      });
    


app.listen(777);