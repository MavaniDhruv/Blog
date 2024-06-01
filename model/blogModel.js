const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blog_img:{
        type:Image
    },
    blog_title:{
        type:String
    },
    blog_text:{
        type:String
    },
    like: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    user_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    state:{
        type:Number
    }
})

module.exports = mongoose.model('blog',blogSchema)