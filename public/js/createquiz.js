let questions = [];
let question = document.querySelector(".question");
let options = document.querySelectorAll(".opt");
let ans = document.querySelector(".ans");
let addButton = document.querySelector(".add-question");
let questionboard = document.querySelector(".create-quiz-info");
let submitBtn=document.querySelector(".cta-button");
let hiddeninput=document.querySelector(".hidden-input");
let clearbtn=document.querySelector(".clearbtn");

function clearinput(){  //clears the inputs after clicking on add button as it is called in addButton eventlistener
  question.value='';
  for(i=0;i<4;i++){
    options[i].value='';
  }
  ans.value='';
}

clearbtn.addEventListener('click',()=>clearinput());

addButton.addEventListener("click", () => {

  let div = document.createElement("div");
  let removebtn = document.createElement("button");
  removebtn.innerText = 'remove';
  removebtn.classList.add("remove");

  let br = document.createElement('br');

  let quest = document.createElement("h4");
quest.classList.add("question-text");
quest.innerText = question.value;
quest.style.display = "inline";
quest.style.color='black'

let opt1 = document.createElement("p");
opt1.classList.add("option1");
opt1.innerText = options[0].value;
opt1.style.color = "black";

let opt2 = document.createElement("p");
opt2.classList.add("option2");
opt2.innerText = options[1].value;
opt2.style.color = "black";

let opt3 = document.createElement("p");
opt3.classList.add("option3");
opt3.innerText = options[2].value;
opt3.style.color = "black";

let opt4 = document.createElement("p");
opt4.classList.add("option4");
opt4.innerText = options[3].value;
opt4.style.color = "black";

let answer = document.createElement("p");
answer.innerText=ans.value;
answer.classList.add("answer");
answer.style.color='black';

div.classList.add("addedquestion");
questionboard.appendChild(div);

div.append("Question:",quest);
div.append(br);
div.append('option A:',opt1);
div.append('option B:',opt2);
div.append('option C:',opt3);
div.append('option D:',opt4);
div.append('Answer :',answer);

div.appendChild(removebtn);

clearinput();
});

// Add event listener to the parent element using event delegation
questionboard.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    let parentDiv = event.target.parentElement;
    if (parentDiv) {
      parentDiv.remove();
    }
  }
});

submitBtn.addEventListener('click', () => {
  // initialize the questions array
  questions = [];

  // Get all the question divs from the questionboard
  const questionDivs = questionboard.querySelectorAll('.addedquestion');

  // Loop through each question div and store its data in the questions array
  questionDivs.forEach(questionDiv => {
    let questionText = questionDiv.querySelector('.question-text').textContent;
    let option1 = questionDiv.querySelector('.option1').textContent;
    let option2 = questionDiv.querySelector('.option2').textContent;
    let option3 = questionDiv.querySelector('.option3').textContent;
    let option4 = questionDiv.querySelector('.option4').textContent;
    let answer = questionDiv.querySelector('.answer').textContent;

    questions.push({
      quest: questionText,
      option1:option1,
      option2:option2,
      option3:option3,
      option4:option4,
      ans: answer
    });

  });

  // You can now save the questions array or perform any other necessary actions
  let arrayString = JSON.stringify(questions);
  hiddeninput.value=arrayString;
});