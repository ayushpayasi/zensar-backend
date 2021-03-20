const express = require("express")
const contactModel = require("../schema/contactschema")

const postRoutes = express.Router()

// post routes for contact

postRoutes.post("/contact",async (req,res)=>{
    const createdModel = new contactModel({
        "id":req.body.id,
        "name":req.body.name,
        "email":req.body.email,
        "contact":req.body.contact,
        "address":req.body.address
    })
    try{
        const data = await createdModel.save()
        res.status(200).send(data)
    }
    catch(err){
        res.send({"message":err}).status(400)
    }
})

module.exports = postRoutes