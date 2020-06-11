// Caching the DOM
var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score'); 
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

var Options = ["Rock", "Paper", "Scissors"];

rock_div.addEventListener("click", function() {
	var userChoose = Options[0];
	console.log("you clicked on Rock");
	game(userChoose);
	// console.log(userChoose);
	
	
})
paper_div.addEventListener("click", function() {
	var userChoose = Options[1];
	game(userChoose);
	console.log("you clicked on Paper");

})
scissors_div.addEventListener("click", function() {
	var userChoose = Options[2];
	game(userChoose);
	console.log("you clicked on Scissors");
})



function compChoice(){
	var randomNumber = Math.floor(Math.random()*3);
	var compChoose = Options[randomNumber];
	// console.log(compChoose);

	return compChoose;
}

function game(userChoose){
	const compChoose = compChoice();

	switch(userChoose + compChoose){
		case "RockScissors":
		case "PaperRock":
		case "ScissorsPaper":
			userWins(userChoose,compChoose);
			console.log("USER WINS");
			break;
		case "RockPaper":
		case "PaperScissors":
		case "ScissorsRock":
			userLoss(userChoose,compChoose);
			console.log("USER LOSSES");
			break;
		case "RockRock":
		case "PaperPaper":
		case "ScissorsScissors":
			draw(userChoose,compChoose);
			console.log("MATCH DRAW");
			break;	
	}

}

function userWins(uC , cC){
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	var subUser = "(user)".fontsize(3).sub();
	var compUser = "(comp)".fontsize(3).sub();
	result_div.innerHTML = uC+subUser +" beats "+ cC+compUser + ". You Won! ";
	var firstLetter = uC[0].toLowerCase();
	document.getElementById(firstLetter).classList.add("green");

	setTimeout( function(){
		document.getElementById(firstLetter).classList.remove("green");
	},200)
}

function userLoss(uC , cC){
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	var subUser = "(user)".fontsize(3).sub();
	var compUser = "(comp)".fontsize(3).sub();
	result_div.innerHTML = uC+subUser +" losses to "+ cC+compUser + ". You Lost! ";
	var firstLetter = uC[0].toLowerCase();
	document.getElementById(firstLetter).classList.add("red");

	setTimeout( function(){
		document.getElementById(firstLetter).classList.remove("red");
	},200)
	// compScore_span.innerHTML = compScore;
}

function draw(uC , cC){
	userScore;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	var subUser = "(user)".fontsize(3).sub();
	var compUser = "(comp)".fontsize(3).sub();
	result_div.innerHTML = uC+subUser +" draws "+ cC+compUser + ". Draw! ";
	var firstLetter = uC[0].toLowerCase();
	document.getElementById(firstLetter).classList.add("grey");

	setTimeout( function(){
		document.getElementById(firstLetter).classList.remove("grey");
	},200)
}