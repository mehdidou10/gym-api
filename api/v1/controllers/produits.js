let produits = require("../models/produits");



let produits1 = async (req, res) => {
 

   produits.find({},async(err,result)=>{
        if(err== null && result.length >0) {
            res.status(200).json({produits:result})
        }else{
  res.status(300).json({status:'user not fond'})
  
        }
      })
  
  }
  module.exports =produits1 ;