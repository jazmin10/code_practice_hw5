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
	function displayQuestion(questionObj) {
		var questionDiv = $("<div>");

		questionDiv.append("<h2>Time Remaining: <span id='time-remaining'>" + timer + "</span> seconds</h2>");
		questionDiv.append("<h2>" + questionObj.question +"</h2>");

		questionObj.options.forEach(function(option) {
			questionDiv.append("<div class='answer-options' value='" + option + 
				"'>" + option + "</div>");
		});

		$("#quiz").append(questionDiv);
	}

	function displayAnswer(questionObj) {
		var questionDiv = $("<div>");
		var message = "Out of time!";

		questionDiv.append("<h2>Time Remaining: <span id='time-remaining'>10</span> seconds</h2>");
		questionDiv.append("<h2>" + message + "</h2>");
		questionDiv.append("<p>Correct answer: " + questionObj.correctAnswer + "</p>");
		questionDiv.append(questionObj.image);

		$("#quiz").append(questionDiv);
	}

	// displayAnswer(quiz[0]);
	// displayQuestion(quiz[0]);
});