let redBtn = document.getElementById("redPill");
redBtn.addEventListener("click", goDownTheRabbitHole);

let blueBtn = document.getElementById("bluePill");
blueBtn.addEventListener("click", allOutOfBubbleGum);

function goDownTheRabbitHole(){
    document.getElementById("webPage").classList.add('TheMatrix');
    console.log("you took the red pill");
    alert("The Matrix has you...");
}

function allOutOfBubbleGum(){
    document.getElementById("webPage").classList.add('TheyLive');
    alert("OBEY AND CONFORM");
}