const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const quizdata= new Schema({
    quiztitle: {
        type:String,
        required:true
    },
    quizdescription:{
        type:String,
        required:true
    },
    image:{
        data: Buffer,
        contentType: String,
    },
    quizCategory:{
        type:String,
        required:true
    },
    questions:{
        type:Array
    }
})

const Quiz=new mongoose.model("Quiz",quizdata)
module.exports=Quiz;