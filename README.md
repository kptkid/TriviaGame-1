# HW - TriviaGame

## Live Link 
 - mfyke.github.io/TriviaGame/

## Requirements

- You'll create a trivia game that shows only one question until the player answers it or their time runs out.

- If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question, do this without user input.

-The scenario is similar for wrong answers and time-outs.

-If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.

-If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

-On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).


## Technologies Used
- Jquery for Dom Manipulation

- HTML

- CSS

- Bootstrap

- JavaScript

## Code Explaination
- The main trick of this assignment was figuring out how to make a timer and make the page respond to the timer running out.

-timeInSeconds=30;
	timer = setInterval(function() {
		$("#timer").html("Time Remaining: " + timeInSeconds);
		timeInSeconds--;
		if (timeInSeconds < 0) {
			questionNotAnswered();
		}
	}, 1000);

-This task required two variables and a method called setInterval. The setInterval method allows you to run code within the function inside of the method at a specified interval, which in this case was 1000ms or one second. Every second that the function was run the variable that keeps track of the seconds remaining was decremented by one.	