let Account = require("../models/user");
let jwt = require("jsonwebtoken");

let card = async (req, res) => {
  let token = req.header('authtoken');
  console.log(token)
  if (!token){
  res.status(300).json({status:'token not send'})

  }
  let decoded = jwt.verify(token,'azerty55')
  Account.find({_id:decoded.id},async(err,result)=>{
      if(err== null && result.length >0) {
          res.status(200).json({user:result})
      }else{
res.status(300).json({status:'user not fond'})

      }
    })

}
module.exports = card;