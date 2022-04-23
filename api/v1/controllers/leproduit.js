let produits3 = require("../models/produits3");
let produits2 = require("../models/produits2");
let produits = require("../models/produits");


let leproduit = async(req,res)=>{
let id = req.body.id
let pro =  await produits.findById(id)



console.log(pro)
res.status(200).json({status:'succes',produit:pro})

}


module.exports= leproduit;