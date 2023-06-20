const Movie = require("../models/movieModel")

exports.movies=async(req,res)=>{
    try {
        const movies=await Movie.find()
        res.status(200).send({msg:"get all success",movies})
    } catch (error) {
        res.status(500).send(error) 
    }
}

exports.addmovie=async(req,res)=>{
    try {
        const newmovie=new Movie(req.body)
        await newmovie.save()
        res.status(200).send({msg:"add success",newmovie})
       
    } catch (error) {
        res.status(500).send("callback ")
        
    }
}


exports.deletemovie=async(req,res)=>{
    try {
        await Movie.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:"delete success"})
    } catch (error) {
        res.status(500).send("callback ")
        
    }
}

exports.getSingleMovie = async  (req,res)=>{
    const id=req.params.id
  try {
    const movies = await Movie.findById(id);
    res.status(200).send({success:true,message:'Successfully get one',data:movies})
  } catch (err) {
    res.status(500).send("callback ")
  }
}


exports.updatemovie=async(req,res)=>{
    const id=req.params.id
   
  try {
    const newmovie = await Movie.findByIdAndUpdate(id,{ $set:req.body },{new:true }
    );
    res.status(200).json({success:true,message:'Successfully updated',data:newmovie})
  } catch (err) {
    res.status(500).json({success:false,message:'failed to update'}) 
}
}





