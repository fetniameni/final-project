const express=require('express')
const { model } = require('mongoose')
const { movies,addmovie,updatemovie,deletemovie,getSingleMovie } = require('../controllers/movieController')
const movieroute=express.Router()
movieroute.post('/addmovie',addmovie)
movieroute.get('/getmovie',movies)
movieroute.put('/updatemovie/:id',updatemovie)
movieroute.delete('/deletemovie/:id',deletemovie)
movieroute.get('/getmovie/:id',getSingleMovie)
module.exports=movieroute


