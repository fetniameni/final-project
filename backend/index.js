const express = require("express")
const connectdb = require("./config/configDB")
const authRouter = require("./routers/authRouter")
const movieRouter = require("./routers/movieRouter")
const userRouter=require('./routers/userRouter')
const app = express()
const cors = require("cors");
require("dotenv").config()
const port = process.env.port
app.use(cors());
app.use(express.json())
app.listen(port,
   console.log("serveur connecter !!!") 
)
connectdb()

 app.use("/api/auth",authRouter)
 app.use("/api/movie",movieRouter)
 app.use("/api/user",userRouter)