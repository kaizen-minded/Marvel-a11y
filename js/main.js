'user strict';

const QUIZDATA = [
	{
		question: 'Which superhero was not in Captain America Civil War?',
		answerA: 'The Vision',
		answerB: 'Thor',
		answerC: 'Black Panther',
		answerD: 'Ant-man',
		correctAnswer: "B"
	},
	{
		question: 'How many infinty stones are in the universe?',
		answerA: '5',
		answerB: '6',
		answerC: '4',
		answerD: '7',
		correctAnswer: "B"
	},
	{
		question: 'What metal is the black panther suit made of?',
		answerA: 'Adamantitum',
		answerB: 'Uru',
		answerC: 'Carbonadium',
		answerD: 'Vibrianium',
		correctAnswer: "D"
	},
	{
		question: "Which historical war did Captain America fight in?",
		answerA: 'World War II',
		answerB: 'American Civil War',
		answerC: 'World War I',
		answerD: 'Vietnam',
		correctAnswer: "A"
	},
	{
		question: "What is the name of Spider-man's AI for his costume?",
		answerA: 'Karen',
		answerB: 'Kelly',
		answerC: 'Carol',
		answerD: 'Liz',
		correctAnswer: "A"
	},
	{
		question: 'Which one is not a infinity stone?',
		answerA: 'Time',
		answerB: 'Power',
		answerC: 'Soul',
		answerD: 'Force',
		correctAnswer: "D"
	},
	{
		question: 'Deadpool is known for breaking?',
		answerA: 'Hearts',
		answerB: 'The Fifth Wall',
		answerC: 'The Fourth Wall',
		answerD: 'Wind',
		correctAnswer: "C"
	},
	{
		question: "Who is Peter Quill's daddy?",
		answerA: 'Yondu',
		answerB: 'Gamora',
		answerC: 'Drax',
		answerD: 'Ego the Planet',
		correctAnswer: "A"
	},
	{
		question: "Who is the Juggernaut's brother?",
		answerA: 'Colossus',
		answerB: 'Charles Xaiver',
		answerC: 'Cable',
		answerD: 'Fire Fist',
		correctAnswer: "B"
	},
	{
		question: "What is Iron-man's secret identity?",
		answerA: 'Tony Stark',
		answerB: 'Steve Rogers',
		answerC: "It's not a secret",
		answerD: 'Robert Downey Jr',
		correctAnswer: "C"

	},
];

let score = 0,
	questionNumber = 0;

$(function() {

	$("#start-the-quiz").click( function(){
		renderQuiz();
    toggleDisplay("#question-score, #start-page, #quiz-page");
    turnOnDisplay("#marvelQuiz");
		});

	$(".submit-answer").click(function(){
    	event.preventDefault();
    	checkTheUseAnswer();
      toggleDisplay("#response-page, #quiz-page");
		});

	$("#next-question").click( function(){
		questionNumber++;
		if(questionNumber < QUIZDATA.length){
			renderQuiz();
      toggleDisplay("#response-page, #quiz-page");
      turnOffDisplay(".feedback-correct, .feedback-wrong");
		} else{
			finalResults();
      toggleDisplay("#report-page, #response-page, #question-score");
		}
		});
	$("#play-again").click( function(){
		score = 0;
		questionNumber = 0;
    toggleDisplay("#start-page, #report-page");
    turnOffDisplay("#question-score, #marvelQuiz, .feedback-correct, .feedback-wrong, h3, img");  

});
	
	function renderQuiz() {
		$(".question").text(questionNumber + 1);
		$(".score").text(score);
		$("#marvelQuiz").text(`${QUIZDATA[questionNumber].question}`);
    multipleChoiceAnswers();
    $('[name="Marvel"]').prop('checked', false);

	}

	function multipleChoiceAnswers(){
      $("[for=answerA] span").text(`${QUIZDATA[questionNumber].answerA}`);
      $("[for=answerB] span").text(`${QUIZDATA[questionNumber].answerB}`);
      $("[for=answerC] span").text(`${QUIZDATA[questionNumber].answerC}`);
      $("[for=answerD] span").text(`${QUIZDATA[questionNumber].answerD}`);
	}

	function checkTheUseAnswer(){
		let userAnwer = $("input[name=Marvel]:checked").val();
		let correctAnswer = QUIZDATA[questionNumber].correctAnswer;
		if(userAnwer === correctAnswer){
			score++;
			$(".score").text(score);
      turnOnDisplay(".feedback-correct");
		}else{
      turnOnDisplay(".feedback-wrong");
      let correctValue = $(`[for=answer${correctAnswer}] span`).text();
      $("#right-answer").text(correctValue);
		}
	}

	function finalResults(){
		let finalScore = score / QUIZDATA.length * 100;
		if(finalScore === 100){
      turnOnDisplay(".perfect-score");
		} else if(finalScore >= 90 && finalScore < 100){
      turnOnDisplay(".great-score");
		} else if(finalScore >= 70 && finalScore < 90){
      turnOnDisplay(".good-score");
		} else if(finalScore >= 50 && finalScore < 70){
      turnOnDisplay(".ok-score");
		} else{
      turnOnDisplay(".bad-score");
		}
	}

  function turnOffDisplay(selector){
    $(`${selector}`).addClass("hidden");
  }

  function turnOnDisplay(selector){
    $(`${selector}`).removeClass("hidden");
  }

  function toggleDisplay(selector){
    $(`${selector}`).toggleClass("hidden");
  }


});
