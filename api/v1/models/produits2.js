var mongoose = require("mongoose");

const produits2 = mongoose.model("produits2", {

	
	Name:String,
	prix:Number,
	description:String,
	photo1:String,
	photo2:String,
	photo3:String,
	
	
  });
module.exports = produits2;