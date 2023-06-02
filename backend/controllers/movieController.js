const movie = require("../models/movieModel")

exports.getmovie=async(req,res)=>{
    try {
        const getmovie=await movie.find()
        res.status(200).send({msg:"get all success",getmovie})
    } catch (error) {
        res.status(500).send(error) 
    }
}

exports.addmovie=async(req,res)=>{
    try {
        const newmovie=new movie(req.body)
        await newmovie.save()
        res.status(200).send({msg:"add success",newmovie})
    } catch (error) {
        res.status(500).send("callback ")
        
    }
}

exports.updatemovie=async(req,res)=>{
    try {
        const newmovie=await movie.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).send({msg:"update success",newmovie})
    } catch (error) {
        res.status(500).send("callback ")  
    }
}

exports.deletemovie=async(req,res)=>{
    try {
        await movie.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:"delete success"})
    } catch (error) {
        res.status(500).send("callback ")
        
    }
}

exports.getSingleMovie = async  (req,res)=>{
    const id=req.params.id
  try {
    const movie = await movie.findById(id);
    res.status(200).send({success:true,message:'Successfully',data:movie})
  } catch (err) {
    res.status(500).send("callback ")
  }
}




