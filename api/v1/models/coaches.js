var mongoose = require("mongoose");

const coaches = mongoose.model("coaches", {

	
	name:String,
	photo:String,
	instagram:String,
	
  });
module.exports = coaches;