var mongoose = require("mongoose");




const orders = mongoose.model("orders", {
    userid: { type: mongoose.Types.ObjectId },
    produits: Array,
    
    date: { type: Date, default: Date.now },
    adress: String,
    status: String,
  });

  module.exports = orders