const express=require("express");
const app=express();
const path=require("path");
const ejs=require("ejs");
const ejsMate=require("ejs-mate");

const port=4040;
const mongoose =require("mongoose");
const methodOverride=require("method-override");
const Quiz=require("./models/createquizModel");


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

app.get("/",(req,res)=>{
    res.render("listings/home.ejs");
})

app.get("/home",(req,res)=>{
    res.render("listings/home.ejs");
})
app.get("/signup",(req,res)=>{
    res.render("listings/signup.ejs");
})
app.get("/createquiz",(req,res)=>{
    res.render("listings/createquiz.ejs");
})

app.get("/featuredquiz",(req,res)=>{
    res.render("listings/featuredquiz.ejs");
})

app.get("/categories",(req,res)=>{
    res.render("listings/category.ejs");
})

app.get("/about",(req,res)=>{
    res.render("listings/about.ejs");
})

app.get("/contact",(req,res)=>{
    res.render("listings/contact.ejs");
})

app.get("/quizpage",(req,res)=>{
    res.render("listings/quizpage.ejs");
});
app.post("/home",(req,res)=>{
    let questiondata=JSON.parse(req.body.questiondata)
    let addquiz=new Quiz({
        quiztitle:req.body.quizTitle,
        quizdescription:req.body.quizDescription,
        quizCategory:req.body.quizCategory,
        questions:questiondata
    });
    addquiz.save();
    res.redirect("/home");
})
app.get("/quizlist/:category",async(req,res)=>{
    let {category}=req.params;
    let tests= await Quiz.find({quizCategory:category});
    res.render("listings/testlist.ejs",{tests});
});
app.get("/quiz/rules",(req,res)=>{
    res.render("listings/testrules.ejs");
})

app.listen(port,()=>{
    console.log(`port is connected to ${port}`)
})
