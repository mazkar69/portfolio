const mongoose = require("mongoose");
const url = "mongodb+srv://azkar:dazzazkar@cluster0.px0hpf6.mongodb.net/blog-post?retryWrites=true&w=majority";

mongoose.connect(url).then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
})