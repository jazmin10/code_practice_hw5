$(document).ready(function() {

// ======== GLOBAL VARIABLES ========
	var quiz = [{
		question: "What code does Barney follow?",
		options: ["Visual Studio Code", "The Bro Code", "JavaScript", "The Bible"],
		correctAnswer: "The Bro Code",
		image: '<iframe src="https://giphy.com/embed/PIjSfrr66wS9q" width="392" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/barney-stinson-PIjSfrr66wS9q">via GIPHY</a></p>'
	}, {
		question: "What did Marshall wear in order to cover his bald spot?",
		options: ["Toupee", "Native American Headdress", "Wig", "Hat"],
		correctAnswer: "Hat",
		image: '<iframe src="https://giphy.com/embed/1mJHu00bmt1ss" width="480" height="313" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/how-i-met-your-mother-himym-1mJHu00bmt1ss">via GIPHY</a></p>'
	}, {
		question: "Before an art consultant, what was Lily's job?",
		options: ["Teacher", "Lawyer", "Anchor", "Pet Sitter"],
		correctAnswer: "Teacher",
		image: '<iframe src="https://giphy.com/embed/VvAdEQdiB817W" width="480" height="214" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/tv-show-how-i-met-your-mother-himym-VvAdEQdiB817W">via GIPHY</a></p>'
	}, {
		question: "What was the color of the french horn Ted gave to Robin?",
		options: ["Red", "Yellow", "Green", "Blue"],
		correctAnswer: "Blue",
		image: '<iframe src="https://giphy.com/embed/KZDwzaTX4CcGQ" width="356" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spoilers-himym-scherbatsky-KZDwzaTX4CcGQ">via GIPHY</a></p>'
	}, {
		question: "What was Robin's teenage pop star name?",
		options: ["Space Teens", "Glitter", "Robin Sparkles", "Robin Glitter"],
		correctAnswer: "Robin Sparkles",
		image: '<iframe src="https://giphy.com/embed/NwkYPLmQSLmhy" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/himym-canada-day-robin-sparkles-NwkYPLmQSLmhy">via GIPHY</a></p>'
	}];

	var correctQuestions = 0;
	var wrongQuestions = 0;
	var unansweredQuestions = 0;
	var questionId = 0; // holds the setTimeout id used when a question is displayed
	var timerId = 0; // holds the setInterval used for the timer
	var timer = 10; // holds the number of seconds remaning to answer a question
	var quizCounter = 0; // to determine which question to display
	var answeredCorrectly = false; // to help determine if the user answered correctly
	var answerSeconds = 3; // number of seconds you want to display answer

// ======== FUNCTIONS ========

	// Prompting user to start quiz 
	function startButton(message) {
		$("#quiz").append("<button id='start-btn'>" + message + "</button>");
	}

	// Starts the quiz with the first question
	function startQuiz(message) {
	
		// Reset variables
		correctQuestions = 0;
		wrongQuestions = 0;
		unansweredQuestions = 0;
		questionId = 0; 
		timerId = 0; 
		quizCounter = 0; 
		answeredCorrectly = false;

		// Displays first question
		displayQuestion(quiz[quizCounter]);

	}

	// Displays question to user
	function displayQuestion(questionObj) {
		// Reset timer
		timer = 10; 

		// Empty quiz section
		$("#quiz").empty();

		// Create a div
		var questionDiv = $("<div>");

		// Append time remaining and question
		questionDiv.append("<h2>Time Remaining: <span id='time-remaining'>" + timer + "</span> seconds</h2>");
		questionDiv.append("<h2>" + questionObj.question +"</h2>");

		// Append answer options
		questionObj.options.forEach(function(option) {
			questionDiv.append("<div class='answer-options' value='" + option + 
				"'>" + option + "</div>");
		});

		// Add the question information to the quiz section
		$("#quiz").append(questionDiv);

		// After every second, update the timer
		timerId = setInterval(timerCountdown, 1000);
	}

	// Checks if user's response is correct
	function checkAnswer() {
		// Grab user's answer
		var userAnswer = $(this).attr("value");
		
		// If the user answered correctly...
		if (userAnswer === quiz[quizCounter].correctAnswer) {
			answeredCorrectly = true;
		}
		// If the user answered wrong...
		else {
			answeredCorrectly = false;
		}

		// Display the answer
		displayAnswer(quiz[quizCounter]);

	}

	// Displays answer to user
	function displayAnswer(questionObj) {
		// Stop the timer
		clearInterval(timerId);

		// Empty the quiz section
		$("#quiz").empty();

		// Create a div
		var questionDiv = $("<div>");
		var message = "Nope"; // the message shown to user

		// If user ran out of time, set message to "Out of Time!"
		if (timer === 0) {
			message = "Out of Time!";
		}
		// If user answered correctly, set message to "Correct"
		else if (answeredCorrectly) {
			message = "Correct!"
		}

		// Append time remaining and message
		questionDiv.append("<h2>Time Remaining: <span id='time-remaining'>" + timer + "</span> seconds</h2>");
		questionDiv.append("<h2>" + message + "</h2>");

		// If the user answered incorrectly OR ran out of time...
		if (!answeredCorrectly || timer === 0) {
			// Append correct answer
			questionDiv.append("<p>Correct answer: " + questionObj.correctAnswer + "</p>");
		}
		
		// Append image
		questionDiv.append(questionObj.image);

		// Add answer information to quiz section
		$("#quiz").append(questionDiv);

		// If we have reached the end of our questions...
		if (quizCounter === quiz.length - 1) {
			console.log("End of quiz");
		}
		// If we still have questions left to answer...
		else {
			quizCounter++;

			// Display the next question after certain seconds
				// The third parameter is the argument we are passing to displayQuestion
				// Turning answerSeconds to milliseconds
			setTimeout(displayQuestion, answerSeconds * 1000, quiz[quizCounter]);
		}
	}

	// Timer functionality
	function timerCountdown() {
		timer--;

		// If time runs out, display the answer
		if (timer === 0) {
			displayAnswer(quiz[quizCounter]);
		}
		// Otherwise, update timer
		else {
			$("#time-remaining").html(timer);
		}
	}

// ======== MAIN PROCEDURES ========

	// Display start button to user
	startButton("START");

	// When they click the start button, then start the quiz
	$("#quiz").on("click", "#start-btn", startQuiz);

	// When a user clicks an answer option, check if user answered correctly
	$("#quiz").on("click", ".answer-options", checkAnswer);

	// displayAnswer(quiz[0]);
	// displayQuestion(quiz[0]);
});