
let userprogramme = require("../models/user");
let jwt = require("jsonwebtoken")


let updateuser = async (req,res)=>{

    let token = req.header('authtoken')
    let programme = req.body.programme;
    if(!token){
   res.status(300).json({status:'token not send'})


    }else{
       
        let decodedtoken = jwt.verify(token,'azerty55')
    
        let doc= await userprogramme.findOneAndUpdate({_id:decodedtoken.id},{programme:programme},{
            new: true
          })
       let user = new userprogramme(doc)
       console.log(doc,decodedtoken)
       await  user.save()
        res.status(200).json({status:'succes'})
    }







}

module.exports = updateuser;