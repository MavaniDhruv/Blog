const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    cate_name:{
        type:String
    }
})

module.exports = mongoose.model('category',categorySchema)