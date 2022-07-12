// Questions Array
let questions = [
    {
        question: "The div element is what exactly?",
        choices: ["A a container", "B a divider", "C a function", "D a page"],
        answer: "A a container"
    },
    {
        question: "What symbol represents a terminator?",
        choices: ["A a ';'", "B a '%'", "C a '&'", "D a '*'"],
        answer: "A a ';'"
    },
    {
        question: "I'm glad I have _______ to apply the functionality.",
        choices: ["A HTML", "B CSS", "C  Javascript", "D Java"],
        answer: "C Javascript"
    },
    {
        question: "What does the var command do?",
        choices: ["A  creates a document", "B creates a variable", "C creates a function", "creates parameters"],
        answer: "B creates a variable"
    }]
    
// define variables for cards to display later
    const homepage = document.querySelector("#homepage-card");
    const quiz = document.querySelector("#quiz-card");
    const highscore = document.querySelector("#highscore-card");
    const endPage = document.querySelector("#finish-page-card");
// link buttons for later logical use
    let startButton = document.querySelector("#Start-Btn");
    let A = document.querySelector ("#A");
    let B = document.querySelector ("#B");
    let C = document.querySelector ("#C");
    let D = document.querySelector ("#D");

//time variables for function use
    let clock = document.querySelector( "#clock") 
    let timer = document.getElementById("homepage")
    let timeRemaining = 60;
    let numberOfQuestion = 0;
    let counterOfQuestion = 1;
    
// All functions for logic
// startGame();
// endGame();
// startButton();
//




// on start button begin quiz and start countdown timer
function startGame() {
    let varInterval = setInterval(function() {
        timeRemaining--;
        timer.textContent = "Time Remaining: " + timeRemaining + " seconds";
    
        if (timeRemaining <= 0) {
          clearInterval(varInterval);
          timer.textContent = "TIME! Please enter initials below and view highscores!";
          endGame();
        }
    
        else if (counterOfQuestion >= questions.length) {
            clearInterval(varInterval);
            endgame();
          }
        }, 1000);
}
///////////////////
startButton () {
    homepage.style.display = "none";
    quiz.style.display = "block";
    numberOfQuestion = 0;
    startQuiz();
    readQuestion(numberOfQuestion);
}

function readQuestion (x) {
    
    }

// all logic //

//set time left as the score and display this with text.Content()

