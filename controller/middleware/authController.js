const user = require("../../models/userModel")

const createUser = async (req,res)=>{
    const userEmail =  req.body.email
    const userFound  = await user.findOne({email : userEmail})
    if (!userFound){
       const newUser = new user(req.body)
       newUser.save()
       res.json(newUser)
    }
    else console.log("user already exist")
    res.json({
        "message" : "erreur"
    })
}



const getSignIn = (req,res)=>{
    res.render("../../views/auth/signIn")
}

module.exports = { createUser,getSignIn}