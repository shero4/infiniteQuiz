//variables
var questions = [{
	'question': 'What is 1 + 2',
	'answer': 3
}, {
	'question': 'What is 2 + 2',
	'answer': 4
}, {
	'question': 'What is 4 + 2',
	'answer': 6
}, {
	'question': 'What is the meaning of life',
	'answer': 'nothing'
}];
var currentQuestion = 0;
var totalQuestion = questions.length;
var score = 0;
var nscore = 0;

var submitButton = document.getElementById('nextButton');
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var answer = document.getElementById('answer');
var resultCont = document.getElementById('result');

//fucntions
function loadQuestion(questionIndex) {
	var q = questions[questionIndex];
	questionEl.innerHTML = (questionIndex + 1) + '/&infin;' + ' ' + q.question;
}

function loadNextQuestion() {
	var ans = answer.value;
	if(questions[currentQuestion].answer == ans){
		score += 1;
	}else{
		nscore += 1;
	}
	answer.value == null;
	currentQuestion++;
	if(currentQuestion == totalQuestion - 1){
		nextButton.innerHTML = '&infin;';
	}
	if(currentQuestion == totalQuestion) {
		container.style.display = 'none';
		resultCont.style.display = '';
		var finalScore = score - nscore;
		resultCont.textContent = 'Your score is ' + finalScore;
		return;
	}
	loadQuestion(currentQuestion);
}

//execution
loadQuestion(currentQuestion);