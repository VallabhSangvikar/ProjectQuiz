const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const quizdata= new Schema({
    quiztitle: {
        type:String,
        reqiured:true
    },
    quizdescription:{
        type:String,
        reqiured:true
    },
    quizCategory:{
        type:String,
        reqiured:true
    },
    questions:{
        type:Array
    }
})

const Quiz=new mongoose.model("Quiz",quizdata)
module.exports=Quiz;