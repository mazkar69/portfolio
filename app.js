const express = require("express")
const app = express();
const path = require("path")
const ejs = require("ejs")
const port = process.env.PORT || 5000;

// Seting the static file
app.use("/static",express.static("static"))

// Seting the view engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("index")
    
})

app.get("/blog",(req,res)=>{
    res.render("blog")
    
})
app.get("/create-new-post",(req,res)=>{
    res.render("create-post")
    
})

app.listen(port,()=>{
    console.log("Running at port ",port);
})

