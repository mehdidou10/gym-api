let Account = require("../models/user");
let jwt = require("jsonwebtoken");

let login = async (req, res) => {
    let Email = req.body.Email;
    let password = req.body.password;
  
    Account.find({ Email: Email, password:password }, async (err, results) => {
      if (err == null && results.length > 0) {
       let tokeninfo={
           id:results._id,
           Email:results.Email
       }
      let token=jwt.sign(tokeninfo,'ghilestoken')
        res.status(200).json({ status: "login with succes " ,token:token});
      } else {
       res.status(300).json({ status: "login with faile "})
      }
    });
  };
  module.exports = login;