var mongoose = require("mongoose");

const produits = mongoose.model("produits", {

	
	Name:String,
	prix:Number,
	description:String,
	photo1:String,
	photo2:String,
	photo3:String,
	
	
  });
module.exports = produits;