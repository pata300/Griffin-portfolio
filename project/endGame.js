
function loadButton(){
    let replay = document.getElementById("replayBtn");
    console.log(replay);
    replay.addEventListener("click", startNewGame);
}


window.onload = function endGame(){
    console.log("ending the game");
    let finalScore = sessionStorage.getItem('score');
    console.log(finalScore);
    document.getElementById("scoreBody").innerHTML = "You scored: " + finalScore;
    loadButton();
}

function startNewGame(){
    console.log("starting new game");
    window.location.href = "quizGame.html";
}

endGame();