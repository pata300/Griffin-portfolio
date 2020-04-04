class Question{
    
    constructor(){
        this.question;
        this.correctAnswer;
        this.falseAnswers= new Array();
        this.numberOfFalseAnswers=0;
    }

//question object
    //String question
    //String correctAnswer
    //String[] falseAnswer
    setQuestion(question){
        this.question = question;
    }
    //setQuestion(String question)
    
    getQuestion = function(){
        if(this.question!=null){
            return this.question;
        }else{
            return "Error: question does not exist";
        }
        
    }
    //getQuestion()
        //return question
    
    setCorrectAnswer(correctAnswer){
        this.correctAnswer=correctAnswer;
    }
    //setCorrectAnswer(String)
    //could set all correct answers to the same index in the falseAnswer array?
    getCorrectAnswer = function(){
        return this.correctAnswer;
    }
    //getCorrectAnswer()
        //return correctAnswer
    setFalseAnswer(falseAnswers = []){
        for (let i=0; i < falseAnswers.length; i++){
            this.falseAnswers[i] = falseAnswers[i];
        }
        // this.falseAnswers=falseAnswer;
        // console.log("setting false");
        // console.log(this.falseAnswers);
    }
    //setFalseAnswer(String)
    getFalseAnswer(){
        return this.falseAnswers;
    }
    
    toString(){
        return "" + this.question + " " + this.falseAnswers + " " + this.correctAnswer;
    }
    //getFalseAnswer()
        //return falseAnswer
}