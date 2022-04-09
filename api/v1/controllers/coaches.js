let coaches = require("../models/coaches");


let coaches1 = async (req, res) => {
 

  coaches.find({},async(err,result)=>{
      if(err== null && result.length >0) {
          res.status(200).json({coaches:result})
      }else{
res.status(300).json({status:'user not fond'})

      }
    })

}
module.exports = coaches1 ;