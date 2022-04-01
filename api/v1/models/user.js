var mongoose = require("mongoose");

const Account = mongoose.model("account", {

	First_Name:String,
	Last_Name:String,
	number_phone:String,
	age:String,
	Email:String,
	password:String,
	confirm_your_Password:String,
	
  });
module.exports = Account;