const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    "id":{
        type:String,
        required:true
    },
    "name":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true
    },
    "contact":{
        type:String,
    },
    "address":{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("ContactModel",contactSchema)
