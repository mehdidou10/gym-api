let produits3 = require("../models/produits3");


let produits31 = async (req, res) => {
 

   produits3.find({},async(err,result)=>{
        if(err== null && result.length >0) {
            res.status(200).json({produits3:result})
        }else{
  res.status(300).json({status:'user not fond'})
     }
      })
  
  }
  module.exports = produits31 ;