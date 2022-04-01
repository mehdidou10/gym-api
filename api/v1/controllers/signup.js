let Account = require("../models/user");

let SignUp = async (req, res) => {
  
  let First_Name = req.body.First_Name;
	let Last_Name = req.body.Last_Name;
	let number_phone = req.body.number_phone;
	let age = req.body.age;
  let Email = req.body.Email;
  let password = req.body.password;
  let confirm_your_Password = req.body.confirm_your_Password;


    Account.find({ Email: Email }, async (err, results) => {
      if (err == null && results.length > 0) {
        res.status(300).json({ status: "This Account was already created" });
      } else {
        try {
          let doc = new Account({

            First_Name:First_Name,
            Last_Name: Last_Name,
            number_phone:number_phone,
            Email: Email,
            password: password,
            confirm_your_Password:confirm_your_Password,
          });
          await doc.save();
          res.status(200).json({ status: "User signed up succefully" });
        } catch (err) {
          res.status(300).json({ status: "Could not create account" });
        }
      }
    });
  };
  module.exports = SignUp;