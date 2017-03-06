window.onload=start;
var triviaQuestions;
var question1, question2, question3, question4, question5, question6, question7, question8, question9, question10;
var correctAnswers=0;
var questionsAnswered=0;
var timeInSeconds;
var timer;
function createQuestion (quote, answer1, answer2, answer3, answer4, correctAnswer, image) {
	this.quote=quote;
	this.answer1=answer1;
	this.answer2=answer2;
	this.answer3=answer3;
	this.answer4=answer4;
	this.correctAnswer=correctAnswer;
	this.image=image;
}
function start(){
	$("#questionSection").hide();
	$("#answersSection").hide();
	$("questionResult").hide();
	$("#gameResult").hide();
	question1 = new createQuestion("Which character said: If I was dead you could bang me all you want. I mean, who cares? A dead body is like a piece of trash. I mean, shove as much shit in there as you want. Fill me up with cream, make a stew out of my ass. What's the big deal? Bang me, eat me, grind me up into little pieces, throw me in the river. Who gives a shit? You're dead, you're dead! Oh shit! Is my mic on?", "Charlie", "Mac", "Frank", "Dennis", "Frank", "assets/images/frank.jpg");
	question2 = new createQuestion("Which character said: Yeah! Okay! This is great because earlier, you were implying that I was racist because you thought that I was implying that all black people are related, and then it turns out that you people actually are!", "Mac", "Frank", "Dee", "Cricket", "Mac", "assets/images/mac.jpg");
	question3 = new createQuestion("Which character said: That's bullshit, 'cause I'm a better smasher than you guys! I should be on the head of the smashing team! You wanna have a smash-off?", "Artemis", "Doyle McPoyle", "Mac", "Dee", "Mac", "assets/images/mac.jpg");
	question4 = new createQuestion("Which character said: Oh not too much, Charlie is using you to prove that he's not racist, and then he asked me out on a date?", "Dee", "Ruby Taft", "Dee", "The Waitress", "The Waitress", "assets/images/theWaitress.jpg");
	question5 = new createQuestion("Which character said: Hello. Who is this? Who?... Who is...? I don't know that name. Who? Who? Oh, oh, Waitress. Why didn't you just say that?", "Dee", "Dennis", "Frank", "Charlie", "Dennis", "assets/images/dennis.jpg");
	question6 = new createQuestion("Which character said: Because Dennis is a bastard man!", "Dennis", "Dee", "Charlie", "Mac", "Dennis", "assets/images/dennis.jpg");
	question7 = new createQuestion("Which character said: Did you fuck my mom, Santa Claus? Did you fuck my mom? Did you fuck her? DID YOU FUCK MY FUCKING MOM? DID YOU FUCK MY MOM, SANTA? AAAAH!", "'Da Maniac", "Charlie", "Mac", "Dennis", "Charlie", "assets/images/charlie.jpg");
	question8 = new createQuestion("Which character said: Hey, did he send you any dick pics? 'Cause it could be a mess down there.", "Dee", "Mac", "Artemis", "The Waitress", "Artemis", "assets/images/artemis.jpg");
	question9 = new createQuestion("Which character said: Mm. I have contained my rage for as long as possible, but I shall unleash my fury upon you like the crashing of a thousand waves! Begone, vile man! Begone from me! A starter car? This car is a finisher car! A transporter of gods! The golden god! I am untethered, and my rage knows no bounds!", "Dee", "Dennis", "Frank", "Cricket", "Dennis", "assets/images/dennis.jpg");
	question10 = new createQuestion("Which character said: Hey do you guys mind if I go into the bathroom and smoke some PCP?", "Mac","Frank", "Charlie", "Cricket", "Cricket", "assets/images/cricket.jpg");
	triviaQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
}
$("#startButton").on("click", function() {
	startGame();
});
$(document).ready(function() {
		$("#answer1").on("click", function() {
			checker(0);
		});
		$("#answer2").on("click", function() {
			checker(1);
		});
		$("#answer3").on("click", function() {
			checker(2);
		});
		$("#answer4").on("click", function() {
			checker(3);
		});
});
function startGame() {
	if (questionsAnswered==10) {
		gameResults();
	}
	else{
	clearInterval(timer);
	timeInSeconds=30;
	timer = setInterval(function() {
		$("#timer").html("Time Remaining: " + timeInSeconds);
		timeInSeconds--;
		if (timeInSeconds < 0) {
			questionNotAnswered();
		}
	}, 1000);
	$("#question").html(triviaQuestions[questionsAnswered].quote);
	$("#answer1").html(triviaQuestions[questionsAnswered].answer1);
	$("#answer2").html(triviaQuestions[questionsAnswered].answer2);
	$("#answer3").html(triviaQuestions[questionsAnswered].answer3);
	$("#answer4").html(triviaQuestions[questionsAnswered].answer4);
	$("#questionResult").hide();
	$("#gameResult").hide();
	$("#playButton").hide();
	$("#questionSection").show();
	$("#answersSection").show();
	}
}
function checker(chosenAnswer) {
	clearInterval(timer);
	$("#timer").html("Time Remaining:");
	$("#questionSection").hide();
	$("#answersSection").hide();
	$("#questionResult").show();
	questionsAnswered++;
	if (chosenAnswer == 0 && triviaQuestions[questionsAnswered-1].answer1 == triviaQuestions[questionsAnswered-1].correctAnswer) {
		questionCorrect();
	}
	else if (chosenAnswer == 1 && triviaQuestions[questionsAnswered-1].answer2 == triviaQuestions[questionsAnswered-1].correctAnswer) {
		questionCorrect();
	}
	else if (chosenAnswer == 2 && triviaQuestions[questionsAnswered-1].answer3 == triviaQuestions[questionsAnswered-1].correctAnswer) {
		questionCorrect();
	}	
	else if (chosenAnswer == 3 && triviaQuestions[questionsAnswered-1].answer4 == triviaQuestions[questionsAnswered-1].correctAnswer) {
		questionCorrect();
	}
	else {
		questionIncorrect();
	}	
}
function questionCorrect() {
	correctAnswers++;
	timeInSeconds=5;
	timer = setInterval(function() {
		timeInSeconds--;
		if (timeInSeconds < 0) {
			startGame();
		}
	}, 1000);
	$("#questionAnswer").html("Correct!: "+ triviaQuestions[questionsAnswered-1].correctAnswer);
	$("#correctAnswerPic").attr("src", triviaQuestions[questionsAnswered-1].image);
}
function questionIncorrect() {
	timeInSeconds=5;
	timer = setInterval(function() {
		timeInSeconds--;
		if (timeInSeconds < 0) {
			startGame();
		}
	}, 1000);
	$("#questionAnswer").html("Nope! The correct answer was: " + triviaQuestions[questionsAnswered-1].correctAnswer);
	$("#correctAnswerPic").attr("src", triviaQuestions[questionsAnswered-1].image);
}
function questionNotAnswered() {
	clearInterval(timer);
	$("#timer").html("Time Remaining:");
	$("#questionSection").hide();
	$("#answersSection").hide();
	$("#questionResult").show();
	questionsAnswered++;
	timeInSeconds=5;
	timer = setInterval(function() {
		timeInSeconds--;
		if (timeInSeconds < 0) {
			startGame();
		}
	}, 1000);
	$("#questionAnswer").html("Nope! The correct answer was: " + triviaQuestions[questionsAnswered-1].correctAnswer);
	$("#correctAnswerPic").attr("src", triviaQuestions[questionsAnswered-1].image);
}
function gameResults() {
	$("#questionResult").hide();
	$("#gameResult").show();
	$("#gameStats").html("Game Over! You answered " + correctAnswers + " out of " + questionsAnswered + " correct!");
}
$("#playAgainButton").on("click", function(){
	questionsAnswered=0;
	correctAnswers=0;
	startGame();
});