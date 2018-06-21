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
		timer = 10; 
		quizCounter = 0; 
		answeredCorrectly = false;

		// Displays first question
		displayQuestion(quiz[quizCounter]);

	}

	// Displays question to user
	function displayQuestion(questionObj) {
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
	}

	// Checks if user's response is correct
	function checkAnswer() {
		var userAnswer = $(this).attr("value")
		
		// if (userAnswer === quiz[quizCounter].)
	}

	// Displays answer to user
	function displayAnswer() {
		// Empty the quiz section
		$("#quiz").empty();

		var questionDiv = $("<div>");
		var message = "Out of time!";

		questionDiv.append("<h2>Time Remaining: <span id='time-remaining'>10</span> seconds</h2>");
		questionDiv.append("<h2>" + message + "</h2>");
		questionDiv.append("<p>Correct answer: " + quiz[quizCounter].correctAnswer + "</p>");
		questionDiv.append(quiz[quizCounter].image);

		$("#quiz").append(questionDiv);
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