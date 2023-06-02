const express = require("express")
const {Register, Login } = require("../controllers/authController")
const { isAuth } = require("../middleware/isAuth")
const { registervalidation, validation, loginvalidation } = require("../middleware/validation")
const authRooter = express.Router()

authRooter.post("/",registervalidation,validation,Register)
authRooter.post("/login",loginvalidation,validation,Login)
authRooter.get('/get',isAuth,(req,res)=>{
   res.send({user:req.user}) ; 
})
module.exports=authRooter