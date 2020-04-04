let cAnswer;
let sAnswer;
let isTheAnswerCorrect = false;
let questionBox = document.getElementById("quizBody");
let printQuestion = new Question();
let count = 0;
let points = 0;
const questionAmount = 10;

// let questionBox = document.getElementById("quizBody");
let submit = document.getElementById("submitBtn");
let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");
let answerD = document.getElementById("answerD");

// let btnA = document.createElement("btnA");
// btnA.innerHTML = "<button id=' btnA ' class='btn btn-primary btn-sm float-right'>A</button>";
// let btnB = document.createElement("btnB");
// btnB.innerHTML = "B";
// let btnC = document.createElement("btnC");
// btnC.innerHTML = "C";
// let btnD = document.createElement("btnD");
// btnD.innerHTML = "D";
let btnA;
let btnB;
let btnC;
let btnD;

submit.addEventListener("click", compareAnswer);
// btnA.addEventListener("click", selectedAnswer(answerA.value));
// btnB.addEventListener("click", selectedAnswer(answerB.value));
// btnC.addEventListener("click", selectedAnswer(answerC.value));
// btnD.addEventListener("click", selectedAnswer(answerD.value));


function compareAnswer(){
    console.log("comparing answer");
    printQuestion = questionBank[count];
    console.log(printQuestion);
    cAnswer = printQuestion.getCorrectAnswer();
    if(cAnswer == sAnswer){
        isTheAnswerCorrect = true;
        console.log("true");
        points++;
        count++;
    } else {
        count++;
    }
    giveUserAnswer(isTheAnswerCorrect);
}

function printQuestions(printQuestion){
    
    // for(let i = 0; 0 <= questionBank.length; i++){
    // while(index <= questionBank.length){
        console.log(questionBank);
        printQuestion = questionBank[count];
        console.log(printQuestion);
        let newAnswerOrder = randomizeAnswers(printQuestion.getFalseAnswer(), printQuestion.getCorrectAnswer());
        console.log(newAnswerOrder);
        let slotA = newAnswerOrder[0];
        let slotB = newAnswerOrder[1];
        let slotC = newAnswerOrder[2];
        let slotD = newAnswerOrder[3];

        let questionText = printQuestion.getQuestion();
        console.log(questionText);
        questionBox.innerHTML = questionText;

        answerA.innerHTML = slotA + "<button id='btnA' class='btn btn-primary btn-sm float-right' >A</button>";
        btnA = document.getElementById("btnA").addEventListener("click", ()=> selectedAnswer(slotA));

        answerB.innerHTML = slotB + "<button id='btnB' class='btn btn-primary btn-sm float-right'>B</button>";
        btnB = document.getElementById("btnB").addEventListener("click", ()=> selectedAnswer(slotB));

        answerC.innerHTML = slotC + "<button id='btnC' class='btn btn-primary btn-sm float-right'>C</button>";
        btnC = document.getElementById("btnC").addEventListener("click", ()=> selectedAnswer(slotC));

        answerD.innerHTML = slotD + "<button id='btnD' class='btn btn-primary btn-sm float-right'>D</button>";
        btnD = document.getElementById("btnD").addEventListener("click", ()=> selectedAnswer(slotD));

    // }
}

function selectedAnswer(answer){
    sAnswer = answer;
    console.log(sAnswer);
    // return sAnswer;
    // alert(answer + " was selected");
}


function randomizeAnswers(fAnswers = [], cAnswer){
    let empty = false;
    console.log(fAnswers);
    fAnswers.push(cAnswer);
    console.log("fAnswer after: " + fAnswers);
    let answers = [];
    while(!empty){
        // console.log("length before random: " + fAnswers.length);
        let rndIndex = Math.floor(Math.random() * fAnswers.length);
        // console.log("random# " + rndIndex);
        answers.push(fAnswers[rndIndex]);
        // console.log(answers);
        fAnswers = swapToEnd(rndIndex, fAnswers);
        // console.log("fAnswer after swap: " + fAnswers);
        fAnswers.pop();
        // console.log("fAnswer after pop: " + fAnswers);
        // console.log("fAnswer length: " + fAnswers.length);
        // console.log("current fAnswer: " + fAnswers);
        // console.log("current answer: " + answers);
        if(fAnswers.length <= 0){
            empty = true;
        }
    }

    return answers;
}

function swapToEnd(i, answer = []){
    // console.log("swapping: " + answer);
    let temp = answer[answer.length - 1];
    answer[answer.length - 1] = answer[i];
    answer[i] = temp;
    return answer;
}

function giveUserAnswer(answer){
    if(answer){
        alert("You are correct! Your points: " + points);
    } else {
        alert("You are wrong. The correct answer is " + cAnswer + ". Your points: " + points);
    }
    isTheAnswerCorrect = false;
    if(count >= questionAmount){
        sessionStorage.setItem('score', points);
        window.location.href = "winPage.html";
    } else {
        printQuestions();
    }
    
    //check for the end of the quiz
}

// function endGame(){
//     window.location.href = "winPage.html";
//     let scoreBox = document.getElementById("scoreBody");
//     scoreBox.innerHTML = "You scored: " + points;
// }