const express=require('express')
const { model } = require('mongoose')
const { getSingleUser,getAllUser,updateUser,deleteUser,createUser } = require('../controllers/userController')
const userRouter=express.Router()

userRouter.get('/:id',getSingleUser)
userRouter.get('/',getAllUser)
userRouter.put('/:id',updateUser)
userRouter.delete('/:id',deleteUser)
userRouter.post('/adduser',createUser)

module.exports=userRouter