const User = require("../models/userModel")

exports.createUser = async (req,res)=>{
    const newUser=new User(req.body)

    try {
      const savedUser = await newUser.save()
      res.status(200).json({success:true,message:'Successufully created',data:savedUser});
    } catch (err) {
        res.status(500).json({success:false,message:'Failed to create'});
      
    }
  } 

exports.updateUser = async (req,res)=>{
  const id=req.params.id
  try {
    const updatedUser = await User.findByIdAndUpdate(id,{ $set:req.body },{new:true }
    );
    res.status(200).json({success:true,message:'Successfully updated',data:updatedUser})
  } catch (err) {
    res.status(500).json({success:false,message:'failed to update'}) 
  }
}

exports.deleteUser = async (req,res)=>{
    const id=req.params.id
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({success:true,message:'Successfully deleted'})
  } catch (err) {
    res.status(500).json({success:false,message:'failed to delete'})
  }
}

exports.getSingleUser = async  (req,res)=>{
    const id=req.params.id
  try {
    const user = await User.findById(id);
    res.status(200).json({success:true,message:'Successfully',data:user})
  } catch (err) {
    res.status(404).json({success:false,message:'not found'})
  }
}

exports.getAllUser = async (req,res)=>{
  try {
    const users = await User.find({});
    res.status(200).json({success:true,message:'Successfully',data:users})
  } catch (err) {
    res.status(404).json({success:false,message:'not found'})
  }
}