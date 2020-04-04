// let index = 0;
let question;
let questionBank = [];


function addToBank(question){
    questionBank.push(question);
    // console.log("question bank: " + questionBank);
}

async function buildBank(){
    
    let response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple");
    let data = await response.json();
    console.log(data);
    
    for(let i = 0; i < data.results.length; i++){
        question = new Question();
        question.setQuestion(data.results[i].question);
        // console.log(data.results[i].question);
        // console.log(question.getQuestion());
        // let correctAnswer = 
        question.setCorrectAnswer(data.results[i].correct_answer);
        // console.log(data.results[i].correct_answer);
        question.setFalseAnswer(data.results[i].incorrect_answers);
        // console.log(data.results[i].incorrect_answers);
        // console.log(question, i);
        addToBank(question);
    }

    console.log("Bank built");
    console.log(questionBank);
    printQuestions(questionBank);
}

