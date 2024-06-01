const adminModel = require("../model/adminModel");
const blogModel = require("../model/blogModel");
const userModel = require("../model/userModel");

exports.a_login = async (req,res)=>{
    var data = await adminModel.find({"a_email":req.body.a_email});

    if(data.length>0){
        if(data[0].a_password==req.body.a_password){
            res.status(200).json({
                status:"Admin Login Success"
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

exports.a_register = async (req,res) =>{
    var data = await adminModel.create(req.body);

    res.status(200).json({
        status:"Admin Register",
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

exports.view_user_blog = async (req,res) =>{
    var id = req.params.id;
    var data = await blogModel.find({user_id:id});

    res.status(200).json({
        status:"View User Wise Blog",
        data
    })
}

exports.view_status_blog = async (req,res) =>{
    var data = await blogModel.find({state:1});

    res.status(200).json({
        status:"View Status Wise Blog",
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

exports.manage_user = async (req,res) =>{
    var id = req.params.id;
    var data = await userModel.findByIdAndDelete(id);

    res.status(200).json({
        status:"deleted One User",
        data
    })
}