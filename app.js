/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the distance to the moon from Earth?',
      answers: ['238,900 miles', '500,000 miles', '20 miles', '509,523 miles'],
      correctAnswer: '238,900 miles',
    },
    {
      question: 'What type of volcanoes are on the surface of the moon, Titan?',
      answers: [
        'Lava Domes',
        'Cryo Volcano',
        'Composite Volcanoes',
        'Shield Volcanoes',
      ],
      correctAnswer: 'Cryo Volcano',
    },
    {
      question: 'What is the distance to Pluto from Earth?',
      answers: [
        '200.53 billion miles',
        '50.8 million miles',
        '3.1259 billion miles',
        '500 trillion miles',
      ],
      correctAnswer: '3.1259 billion miles',
    },

    {
      question: 'How many days will it take to get to the Sun from Earth?',
      answers: ['19 years', '4 days', '12 years', '16 years'],
      correctAnswer: '19 years',
    },
    {
      question: 'How many Planets are in our Solar System?',
      answers: ['12', '8', '9', '7'],
      correctAnswer: '8',
    },
    {
      question: 'What is the distance from the Earth to Venus?',
      answers: [
        '162 millon miles',
        '102 million miles',
        '204 million miles',
        '64 million miles',
      ],
      correctAnswer: '162 million miles',
    },
    {
      question: 'When was the last time the U.S. went to the moon?',
      answers: [
        'Jan 6th 1974',
        'Oct 12th, 1982',
        'December 14, 1972',
        'June 4th, 1969',
      ],
      correctAnswer: 'December 14, 1972',
    },
    {
      question: 'what is the farthest Planet from the sun?',
      answers: ['Pluto', 'Neptune', 'Saturn', 'Mars'],
      correctAnswer: 'Neptune',
    },
    {
      question: 'What is the biggest dump in space?',
      answers: ['Earth', 'Jupiter', 'The Sun', 'The Moon'],
      correctAnswer: 'Earth',
    },
    {
      question: 'What is the cost of NASA space suit?',
      answers: ['$12,000', '$46,000', '$789,000', '$12,000,000'],
      correctAnswer: '$12,000,000',
    },
  ],

  quizStarted: true,
  questionNumber: 0,
  score: 0,
};

function getQuestions() {
  let number = store.questionNumber;
  let nextQuestion = store.questions[number];
  return nextQuestion;
}

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// generate HTML functions
function generateStartPage() {
  // Generates start page
  const template = `<div class='container'>
                      <div class='wrapper'>
                        <h1> Space Quiz </h1>
                        <button id='start-quiz' class='next-question'>Blast Off</button>
                      </div>
                    </div>`;

  show(template);
}

// make sure to have function update the state

function generateQuestionPage() {
  // Generates question page

  let questionNum = store.questionNumber;
  let question = getQuestions();
  let score = store.score;

  let template = `<form class='container'>
    <div class='wrapper'>
      <h2> Question ${questionNum + 1}</h2>
      <p>${question.question}</p>
      <ul>
        <li><input type='radio' id='answer-1' name='answer' value='${
  question.answers[0]
}' required/>
        <label for='answer-1'>${question.answers[0]}</label></li>
        <li><input type='radio' id='answer-2' name='answer' value='${
  question.answers[1]
}' required/>
        <label for='answer-2'>${question.answers[1]}</label></li>
        <li><input type='radio' id='answer-3' name='answer' value='${
  question.answers[2]
}' required/>
        <label for='answer-3'>${question.answers[2]}</label></li>
        <li><input type='radio' id='answer-4' name='answer' value='${
  question.answers[3]
}' required/>
        <label for='answer-4'>${question.answers[3]}</label></li>
      </ul>
      <button type='submit' class='submit-answer'>Submit Answer</button>
      
      <p>${questionNum + 1} out of ${store.questions.length}</p>
      <p> Score is ${score} out of ${store.questions.length} </p>
 
    </div>
      </form>
  `;
  show(template);
}

function generateAnswerScreen() {
  let userAnswer = $('input[name="answer"]:checked').val();
  let question = getQuestions();
  let correctAnswer = question.correctAnswer;
  let template;

  if (userAnswer === correctAnswer) {
    store.score += 1;
    store.questionNumber += 1;
    template = `<div class='container'><div class='wrapper'><h2> Correct </h2>`;
  } else {
    store.questionNumber += 1;
    template = `<div class='container'><div class='wrapper'><h2> Incorrect </h2>
                <p> Correct Answer is: ${correctAnswer} </p>`;
  }
  if (store.questionNumber === store.questions.length) {
    template +=
      '<button class="finish-quiz"> Finish Quiz </button></div></div>';
  } else {
    template +=
      '<button class="next-question"> Next Question </button></div></div>';
  }
  show(template);
}

function generateEndingPage() {
  let userScore = store.score;
  let template;

  if (userScore >= 6) {
    template = `<div class='container'>
                  <div class='wrapper restart'>
                    <h2>Out of this world!</h2>
                    <button class='restart-quiz'> Reenter Mission </button>
                    <p> Your score is ${userScore} out of ${store.questions.length}</p>
                  </div>
                </div>`;
  } else if (userScore <= 5) {
    template = `<div class='container'>
                  <div class='wrapper restart'><h2> You're a flat-earther</h2>
                    <button class='restart-quiz'> Reenter Mission </button>
                    <p> Your score is ${userScore} out of ${store.questions.length}</p>
                  </div>
                </div>`;
  }

  show(template);
}

// callback function
function handleQuizApp() {
  show();
  generateStartPage();
  nextQuestion();
  checkAnswer();
  finishQuiz();
  restartQuiz();
}

// single function render that looks through everything then calls
// what it needs to do

// when the page loads, call `handleShoppingList`
$(handleQuizApp);

function show(state) {
  $('body').html(`${state}`);
}

// Event Handlers

function nextQuestion() {
  $('body').on('click', '.next-question', function () {
    generateQuestionPage();
  });
  // event for handling click to go to the next question
}

function finishQuiz() {
  $('body').on('click', '.finish-quiz', function () {
    generateEndingPage();
  });
}

function checkAnswer() {
  // event handler for calculating right or wrong answer
  $('body').submit('.submit-answer', function (event) {
    event.preventDefault();
    generateAnswerScreen();
  });
}

function restartQuiz() {
  // event to restart the quiz from the beginning
  $('body').on('click', '.restart-quiz', function () {
    store.score = 0;
    store.questionNumber = 0;
    generateStartPage();
  });
}