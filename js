const quizData = [
  {
    question: 'What is the capital of France?',
    choices: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Jupiter', 'Mars', 'Venus', 'Mercury'],
    correctAnswer: 'Mars'
  },
  // Add more questions and their choices here
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const currentQuizData = quizData[currentQuestion];

  questionElement.innerText = currentQuizData.question;
  choicesElement.innerHTML = '';

  currentQuizData.choices.forEach((choice) => {
    const choiceButton = document.createElement('button');
    choiceButton.innerText = choice;
    choiceButton.onclick = function () {
      checkAnswer(choice);
    };
    choicesElement.appendChild(choiceButton);
  });
}

function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuestion];

  if (answer === currentQuizData.correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = `You scored ${score} out of ${quizData.length}!`;
  }
}

displayQuestion();
