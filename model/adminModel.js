const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    a_name:{
        type:String
    },
    a_email:{
        type:String
    },
    a_password:{
        type:String
    }
})

module.exports = mongoose.model('admin',adminSchema)