const blogModel = require("../model/blogModel");
const categoryModel = require("../model/categoryModel");
const commentModel = require("../model/commentModel");
const userModel = require("../model/userModel");
const multer  = require('multer')

const storage = require('node-persist');
storage.init();

exports.u_login = async (req,res)=>{
    var data = await userModel.find({"u_email":req.body.u_email});

    if(data.length>0){
        
        if(data[0].u_password==req.body.u_password){
            var id = await storage.setItem('id',data[0].id)
            res.status(200).json({
                status:"User Login Success"
            })
        }else{
            res.status(200).json({
                status:"Check Your Email And Password"
            })
        }
    }else{
        res.status(200).json({
            status:"Check Your Email And Password"
        })
    }
}

exports.u_register = async (req,res) =>{
    var data = await userModel.create(req.body);

    res.status(200).json({
        status:"User Register",
        data
    })
}

exports.add_category = async (req,res) =>{
    var data = await categoryModel.create(req.body);

    res.status(200).json({
        status:"Category Added",
        data
    })
}

exports.add_blog = async (req,res) =>{
    var u_id = await storage.getItem('id')
    req.body.user_id = u_id;
    var data = await blogModel.create(req.body);

    res.status(200).json({
        status:"Blog Added",
        data
    })
}

exports.view_blog = async (req,res) =>{
    var total_blog = await blogModel.find().count()
    var data = await blogModel.find();

    res.status(200).json({
        status:"View All Blog",
        total_blog,
        data
    })
}

exports.update_blog = async (req,res) =>{
    var id = req.params.id;
    var data = await blogModel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"Updated One Blog",
        data
    })
}

exports.delete_blog = async (req,res) =>{
    var id = req.params.id;
    var data = await blogModel.findByIdAndDelete(id);

    res.status(200).json({
        status:"deleted One Blog",
        data
    })
}

exports.like_blog = async (req,res) =>{
    var id = req.params.id;
    var data = await blogModel.findById(id)
    var like = data.like;
    var u_id = await storage.getItem('id')
    console.log(typeof(like))
    if(!like.includes(u_id)){
        like.push(u_id);
        res.status(200).json({
            status:"Like"
        })
    }else{
        like = like.filter(function(item){
            return item != u_id
        });
        res.status(200).json({
            status:"Unlike"
        })
    }

    var update = await blogModel.findByIdAndUpdate(id,{like:like})
}

exports.comment_blog = async (req,res) =>{
    var id = req.params.id;
    var u_id = await storage.getItem('id')

    req.body.blog_id = id;
    req.body.user_id = u_id
    
    var data = await commentModel.create(req.body);
    
    res.status(200).json({
        status:"Blog Comment done",
        data
    })
}

exports.view_comment = async (req,res) =>{
    var id = req.params.id;
    var data = await commentModel.find({blog_id:id}).populate("user_id");

    res.status(200).json({
        status:"0 Comment",
        data
    })
}