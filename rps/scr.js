//use js DOM to create variables for the different clickable elements in the game
submitButton = document.getElementById("submit");
rockButton = document.getElementById("rock");
paperButton = document.getElementById("paper")
scissorsButton = document.getElementById("scissors")

let robotChoice;
userSelection = "rock" //default usersel

//change userselection to "rock" when rockbutton clicked
//add yellowshadow on click, get rid of other elements' shadows. hide the results display
rockButton.addEventListener("click", ()=>{
    rockButton.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(255, 247, 18, 0.996)";
    userSelection="rock"
    paperButton.style.boxShadow = "None"
    scissorsButton.style.boxShadow = "None"
    document.getElementById("results").style.display = "None";
})
//change userselection to "paper" when paperbutton clicked
//add yellowshadow on click, get rid of other elements' shadows. hide the results display
paperButton.addEventListener("click", ()=>{
    userSelection="paper"
    scissorsButton.style.boxShadow = "None"
    rockButton.style.boxShadow = "None"
    paperButton.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(255, 247, 18, 0.996)";
    document.getElementById("results").style.display = "None";
})
//change userselection to "scissors" when scissorsbutton clicked
//add yellowshadow on click, get rid of other elements' shadows. hide the results display
scissorsButton.addEventListener("click", ()=>{
    userSelection="scissors"
    scissorsButton.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(255, 247, 18, 0.996)";
    rockButton.style.boxShadow = "None";
    paperButton.style.boxShadow = "None";
    document.getElementById("results").style.display = "None";
})
function resultSetup(){ //show the results section. Change to say what user chose and what computer chose. get rid of all boxshadows
    document.getElementById("results").style.display = "block";
    document.getElementById("user").innerHTML = userSelection
    document.getElementById("computer").innerHTML = robotChoice;
    scissorsButton.style.boxShadow = "None"
    rockButton.style.boxShadow = "None";
    paperButton.style.boxShadow = "None";
}

function showLose(){ //screen says "you lost" when you lost
    resultSetup();
    document.getElementById("status").innerHTML = "You Lost!";

}
function showTie(){//screen says "you tied" when you tied
    resultSetup();
    document.getElementById("status").innerHTML = "You Tied!";

}

function showWin(){ //screen says "you won" when you won
    resultSetup();
    document.getElementById("status").innerHTML = "You Won!";

}

submitButton.addEventListener("click", rockPaperScissors) //listens for when the "shoot" button is clicked
function rockPaperScissors(){ //girls will code this function during the meeting

}

