
    let questions=quizdetails.questions;
    console.log(questions);

    let QuestionShow = document.getElementById("questiontitle");
    let opt1 = document.getElementById("labelopt1");
    let opt2 = document.getElementById("labelopt2");
    let opt3 = document.getElementById("labelopt3");
    let opt4 = document.getElementById("labelopt4");
    let savenextbtn = document.getElementById("savenextbtn");
    let previousbtn = document.getElementById("previousbtn");
    let radiobuttons = document.querySelectorAll('input[type="radio"]');
    let quenobtn = document.querySelector(".question-navigation");
    let options = document.querySelectorAll('.option');
     
    for (let i = 0; i < questions.length; i++) {
      let newbtn = document.createElement("button");
      newbtn.innerText = i + 1;
      newbtn.classList.add('navbtn');
      newbtn.addEventListener("click", () => {
        queindex = i;
        displayQuestionAndOptions(queindex);
        updateRadioButtons();
        
     });
      quenobtn.append(newbtn);
      // buttons.push(newbtn);
    }
    let buttons=document.querySelectorAll('.navbtn');

    function changeColor(i){
      buttons.forEach(button =>{
        button.style.backgroundColor="";
      })
      buttons[i].style.backgroundColor="red";
      
    }


    function displayQuestionAndOptions(questionIndex) {
      QuestionShow.textContent = questions[questionIndex].question;
      opt1.textContent = questions[questionIndex].options[0];
      opt2.textContent = questions[questionIndex].options[1];
      opt3.textContent = questions[questionIndex].options[2];
      opt4.textContent = questions[questionIndex].options[3];
      changeColor(questionIndex);
    }

    function updateRadioButtons() {
      radiobuttons.forEach(function(radioButton) {
        if (selectedOptions[queindex] === radioButton.value) {
          radioButton.checked = true;
        } else {
          radioButton.checked = false;
        }
      });
    }
    let queindex = 0;
    displayQuestionAndOptions(queindex);


   

    savenextbtn.addEventListener("click", () => {
      if (queindex !== questions.length - 1) {
        queindex++;
        displayQuestionAndOptions(queindex);
        updateRadioButtons();
      } else {
        queindex = 0;
        displayQuestionAndOptions(queindex);
        updateRadioButtons();
      }
      radiobuttons.forEach(radioButton => {
        radioButton.checked = false;
      });
      updateRadioButtons();
    }
  );

    previousbtn.addEventListener("click", () => {
      if (queindex !== 0) {
        queindex--;
        displayQuestionAndOptions(queindex);
        updateRadioButtons();}
        else{
            queindex = questions.length;
            displayQuestionAndOptions();
            updateRadioButtons();
            
        }
        
      }
    );

    radiobuttons.forEach(radiobtn => {
      radiobtn.addEventListener("click", () => {
        console.log("radiobutton was clicked:", radiobtn.value);
      });
    });

    let selectedOptions = [];
    radiobuttons.forEach(radiobtn => {
      radiobtn.addEventListener("click", () => {
        selectedOptions[queindex] = radiobtn.value;
      });
    });


    for(let i=0;i<4;i++){
      options[i].addEventListener('click',()=>{
        radiobuttons[i].checked=true;
        selectedOptions[queindex] = radiobuttons[i].value;
        console.log("radiobutton was clicked:", radiobuttons[i].value);
      })
    }
    updateRadioButtons();