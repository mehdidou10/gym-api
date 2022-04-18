var mongoose = require("mongoose");

const produits3 = mongoose.model("produits3", {

	
	Name:String,
	prix:String,
	description:String,
	photo1:String,
	photo2:String,
	photo3:String,
	
	
  });
module.exports = produits3;