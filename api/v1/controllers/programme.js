let programme = require("../models/programme");


let programme1 = async (req, res) => {
 

    programme.find({},async(err,result)=>{
        if(err== null && result.length >0) {
            res.status(200).json({programme:result})
        }else{
  res.status(300).json({status:err})
     }
      })
  
  }
  module.exports = programme1 ;