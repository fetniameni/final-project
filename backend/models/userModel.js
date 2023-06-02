const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    image:String,
    fullName:String,
    email:String,
    password:String,
})

module.exports=mongoose.model("user",userSchema)