const express= require("express");
const server=express();// server instance create
server.get('/', (req,res)=>{
    res.send("Hello world");
})

server.get("/about" , (req,res)=>{
    res.send("This is the About page");
})

server.get("/home" , (req,res)=>{
    res.send("This is the Home page");
})
server.get('/Contact' ,(req,res)=>{
    res.send("this is contact page");
})
server.listen(3000);//run server