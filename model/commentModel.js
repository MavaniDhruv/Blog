var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    comment :{
        type:String
    },
    user_id :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'  
    },
    blog_id :{
        type : mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('comment',commentSchema);