const express = require("express")
const mongoose = require("mongoose")
const getRoutes = require("./routes/getroutes")
const postRoutes = require("./routes/postroutes")
const deleteRoutes = require("./routes/deleteroutes")
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 8000

// instance
const server = express()

// database connection
const db = mongoose.connect(process.env.DBURL,{useNewUrlParser:true,useUnifiedTopology:true},()=>{console.log("connected to database")})

// middlewares
server.use(cors())
server.use(express.json())
server.use("/get",getRoutes)
server.use("/post",postRoutes)
server.use("/delete",deleteRoutes)



server.listen(port,()=>{
    console.log(`listening on ${port}`)
})
