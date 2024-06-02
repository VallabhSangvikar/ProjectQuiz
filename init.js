const mongoose =require("mongoose");
const quizModel = require("./models/createquizModel");
main()
.then((res)=>{
    console.log("connection with mongodb successfull");
})
.catch(err=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/quizapp');
  }

let demoQuiz = [
    {
        quiztitle:"The Georgepool quiz",
        quizdescription:"from 100 overall 30 people jump in georgepool",
        quizCategory:"BGMI",
        questions:[{
            quest:"the greatest footballer in the world",
            option1:"messi",
            option2:"ronaldo",
            option3:"virat kohli",
            option4:"none of the above",
            ans:"A"
        }],
        quiztitle:"The Georgepool quiz",
        quizdescription:"from 100 overall 30 people jump in georgepool",
        quizCategory:"BGMI",
        questions:[{
            quest:"the greatest footballer in the world",
            option1:"messi",
            option2:"ronaldo",
            option3:"virat kohli",
            option4:"none of the above",
            ans:"A"
        }],
        quiztitle:"The Georgepool quiz",
        quizdescription:"from 100 overall 30 people jump in georgepool",
        quizCategory:"BGMI",
        questions:[{
            quest:"the greatest footballer in the world",
            option1:"messi",
            option2:"ronaldo",
            option3:"virat kohli",
            option4:"none of the above",
            ans:"A"
        }]
    }
]

quizModel.insertMany(demoQuiz)

