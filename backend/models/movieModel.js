const mongoose = require("mongoose")
const movieSchema = new mongoose.Schema({
    name:String,
    desc:String,
    titleImage:String,
    image:String,
    category:String, 
    language:String,
    year:String,
    time:String,
    video:String,
    rate:Number,
    reviews:Number,
    favoriteMovie:Boolean
    
    
})

module.exports=mongoose.model("movie",movieSchema)