const mongoose = require("mongoose")
const movieSchema = new mongoose.Schema({
    name:String,
    desc:String,
    titleImage:String,
    category:String,
    language:String,
    year:String,
    time:String,
    video:String,
    rate:Number,
    reviews:Number,
})

module.exports=mongoose.model("movie",movieSchema)