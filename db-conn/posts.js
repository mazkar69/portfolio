const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        minlength:[10,"minimun 10 charector"],
        maxlength:[100,"maximum 100 charector allowed "],
        
    },
    tags:{
        type:Array,
        required:true,

    },
    url:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
        maxlength:500,

    },
    contant:{
        type:String,
        required:true,
        maxlength:5000,
        minlength:100,
    },
    upload_time:{
        type:Date,
        default:Date.now(),
    }
})


const Post = new mongoose.model("post",postSchema);

module.exports = Post;