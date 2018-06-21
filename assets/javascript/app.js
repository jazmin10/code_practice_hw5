$(document).ready(function() {

	var quiz = [{
		question: "What code does Barney follow?",
		options: ["Visual Studio Code", "The Bro Code", "JavaScript", "The Bible"],
		correctAnswer: "The Bro Code",
		image: '<iframe src="https://giphy.com/embed/PIjSfrr66wS9q" width="392" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/barney-stinson-PIjSfrr66wS9q">via GIPHY</a></p>'
	}];

	function displayQuestion(questionObj) {
		var questionDiv = $("<div>");

		questionDiv.append("<h2>Time Remaining: <span id='time-remaining'>10</span> seconds</h2>");
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