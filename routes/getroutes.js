const express = require("express")
const contactModel = require("../schema/contactschema")

const getRoutes = express.Router()

// get Routes for contact
getRoutes.get("/contact",async(req,res)=>{
    try{
        console.log("enjoy");
        const data = await contactModel.find()
        res.send(data)
    }
    catch(err){
        res.send({"message":err})
    }
})

module.exports = getRoutes