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
  const template = `<button id='start-quiz' class='next-question'>START</button>`;

  render(template);
}


// make sure to have function update the state

function generateQuestionPage() {
  // Generates question page

  let questionNum = store.questionNumber;
  let question = getQuestions();

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

      

      <p>${questionNum} out of ${store.questions.length}</p>

      <p> Should count number of correct questions and number of wrong questions </p>
 
    
    </form>
  `
  render(template);
}

function generateAnswerScreen() {
  let userAnswer = $('input[name="quiz-question"]:checked').val();
  console.log(getQuestions());
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
    template = `<h2> Incorrect </h2>`
  }
  render(template);
}





// callback function 
function handleQuizApp() {
  render();
  generateStartPage();
  startQuiz();
  checkAnswer();
  nextQuestion();
  restartQuiz();
}




// when the page loads, call `handleShoppingList`
$(handleQuizApp);

function render(state) {
  $('body').html(`${state}`)
}

// Event Handlers


function nextQuestion() {
  $('body').on('click', '.next-question', function(event) {
    event.preventDefault();
    generateQuestionPage();
  })
  // event for handling click to go to the next question

  console.log('nextQuestion ran');
}

// *****For Chris --- When the 'START' button is clicked, the question view is rendered.
function startQuiz() {
  $('body').on('click', '#start-button' ,function(event) {
    event.preventDefault();
    nextQuestion();
    // display first question
    // display answers
    // radio button
    // display submit answer button
    // display counter for questions answered vs questions unanswered
  })
  // When the user presses the "START" button, display first question
}

function checkAnswer() {
  // event handler for calculating right or wrong answer
  $('body').on('click', '.submit-answer', function(event) {
    event.preventDefault();
    generateAnswerScreen();
  })
  
  console.log('checkAnswer ran');
}

function restartQuiz() {
  // even to restart the quiz from the beginning

  console.log('restartQuiz ran');
}