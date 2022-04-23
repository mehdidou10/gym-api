var User = require("../models/user");
var orders = require("../models/orders");
let jwt = require("jsonwebtoken");

let neworder = async (request, response) => {
  let token = request.header("authtoken");
  console.log(token)
  if (!token || token.length === 0) {
    response.status(300).send("No token");
  } else {
    let decoded = jwt.verify(token, "azerty55");
    let userid = decoded.id;
    let produits = request.body.produits|| [];
    console.log(produits)

    let status = request.body.status|| "";
    let adress = request.body.adress|| "";
    try {
      let doc = new orders({
        userid,
        produits,
       
        status,
        adress,
      });
      await doc.save()
      response.status(200).json({ status: "success" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ status: "erreur" });
    }
  }
};

module.exports = neworder;