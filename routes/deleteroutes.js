const express = require('express')
const contactsModel = require("../schema/contactschema")

const deleteRoutes = express.Router()

deleteRoutes.delete("/all:id",async (req,res)=>{
    res.send("indelete").status(200)
})


module.exports = deleteRoutes