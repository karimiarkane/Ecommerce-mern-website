const user = require("../../models/userModel")

const createUser = async (req,res)=>{
    const userEmail =  req.body.email
    const userFound  = await user.findOne({email : userEmail})
    if (!userFound){
       const newUser = new user(req.body)
       newUser.save()
    }
    else console.log("user already exist")
}