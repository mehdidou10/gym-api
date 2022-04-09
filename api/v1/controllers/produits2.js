let produits2 = require("../models/produits2");

let produitss2 = async(req, res) => {
 
  produits2.find({},async(err,result)=>{
      if(err== null && result.length >0) {
          res.status(200).json({produits2:result})
      }else{
res.status(300).json({status:'user not fond'})

      }
    })

}
module.exports = produitss2 ;