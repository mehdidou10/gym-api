var mongoose = require("mongoose");

const programme = mongoose.model("programme", {

	
  programme:String,
	time:String,
  tarif:String,
	coach:String,
	
	
  });
module.exports = programme;