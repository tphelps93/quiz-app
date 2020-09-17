/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the distance to the moon from Earth?',
      answers: [
        '238,900 miles',
        '500,000 miles',
        '20 miles',
        '509,523 miles'
      ],
      correctAnswer: '238,900 miles'
    },
    {
      question: 'What type of volcanoes are on the surface of the moon, Titan?',
      answers: [
        'Lava Domes',
        'Cryo Volcano',
        'Composite Volcanoes',
        'Shield Volcanoes'
      ],
      correctAnswer: 'Cryo Volcano'
    },
    {
      question: 'What is the distance to Pluto from Earth',
      answers: [
        '200.53 billion miles',
        '50.8 million miles',
        '3.1259 billion miles',
        '500 trillion miles'
      ],
      correctAnswer: [
        '3.1259 billion miles'
      ],
    }
  ],
  quizStarted: true,
  questionNumber: 0,
  score: 0
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
  const template = `<h1> Space Quiz </h1>
  <button id='start-quiz' class='next-question'>START</button>`;

  show(template);
}


// make sure to have function update the state

function generateQuestionPage() {
  // Generates question page

  let questionNum = store.questionNumber;
  let question = getQuestions();
  let score = store.score;

  let template = `<form class='container'>
      <h2> Question ${questionNum + 1}</h2>
      <p>${question.question}</p>
      <ul>
        <li><input type='radio' value='${question.answers[0]}' name='quiz-question'/><label>${question.answers[0]}</label></li>
        <li><input type='radio' value='${question.answers[1]}' name='quiz-question'/><label>${question.answers[1]}</label></li>
        <li><input type='radio' value='${question.answers[2]}' name='quiz-question'/><label>${question.answers[2]}</label></li>
        <li><input type='radio' value='${question.answers[3]}' name='quiz-question'/><label>${question.answers[3]}</label></li>
        <li><button type='submit' class='submit-answer'>Submit Answer</button></li>
      </ul>

      

      <p>${questionNum + 1} out of ${store.questions.length}</p>

      <p> Score is ${score} out of ${store.questions.length} </p>
 
    
    </form>
  `
  show(template);
}

function generateAnswerScreen() {
  let userAnswer = $('input[name="quiz-question"]:checked').val();
  let question = getQuestions();
  let correctAnswer = question.correctAnswer;
  let score = store.score;
  let template;

  
  if (correctAnswer === userAnswer) {
    store.score += 1;
    store.questionNumber += 1;
    template = `<h2> Correct </h2>`
  } else {
    store.questionNumber += 1;
    template = `<h2> Incorrect </h2>
                <p> Correct Answer is: ${correctAnswer} </p>`
  }
  if (store.questionNumber === store.questions.length) {
    template += "<button class='finish-quiz'> Finish Quiz </button>"
  } else {
    template += "<button class='next-question'> Next Question </button>"
  }
  show(template);
}

function generateEndingPage() {
  const template = `<h1> You suck! </h1>
                    <button class='restart-quiz'> Restart Quiz </button>`


  show(template);
}





// callback function 
function handleQuizApp() {
  show();
  generateStartPage();
  checkAnswer();
  nextQuestion();
  restartQuiz();
  finishQuiz();
}


// single function render that looks through everything then calls 
// what it needs to do

// when the page loads, call `handleShoppingList`
$(handleQuizApp);

function show(state) {
  $('body').html(`${state}`)
}

// Event Handlers


function nextQuestion() {
  $('body').on('click', '.next-question', function(event) {
    event.preventDefault();
    generateQuestionPage();
  })
  // event for handling click to go to the next question
}

function startQuiz() {
  $('body').on('click', '#start-button', function(event) {
    event.preventDefault();
  })
}

function finishQuiz() {
  $('body').on('click', '.finish-quiz', function(event) {
    event.preventDefault();
    generateEndingPage();
  });
}

function checkAnswer() {
  // event handler for calculating right or wrong answer
  $('body').on('click', '.submit-answer', function(event) {
    event.preventDefault();
    generateAnswerScreen();
  })
}

function restartQuiz() {
  // event to restart the quiz from the beginning
  $('body').on('click', '.restart-quiz', function(event) {
    store.questions.score = 0;
    store.questions.questionNumber = 0;
    event.preventDefault();
    location.reload();
  })


}