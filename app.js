const express=require("express");
const app=express();
const path=require("path");
const ejs=require("ejs");
const ejsMate=require("ejs-mate");

const port=4040;
const mongoose =require("mongoose");
const methodOverride=require("method-override");


app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set(path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));


const MONGO_URL="mongodb://127.0.0.1:27017/quizapp";

main().then(()=>{
    console.log("connected to mongodb")
})
.catch(()=>{
    console.log("error");
})

async function main(){
    await mongoose.connect(MONGO_URL);
}








app.listen(port,()=>{
    console.log(`port is connected to ${port}`)
})
