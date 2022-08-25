// Questions Array
let questionsArray = [
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
    }];
    
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
// time variables for function use
    let clock = document.querySelector( "#clock") 
    let home = document.getElementById("homepage")
    let timeRemaining = 60;
// index variables
    let questionNumber = 0;
    

// on start button begin quiz and start countdown timer
startButton.addEventListener("click", startQuiz, formatQuiz);
A.addEventListener("click", renderChoiceA);
B.addEventListener("click", renderChoiceB);
C.addEventListener("click", renderChoiceC);
D.addEventListener("click", renderChoiceD);

function startQuiz () {
        homepage.style.display = "none";
        highscore.style.display = "none";
        endPage.style.display = "none";
        quiz.style.display = "block";
    let clockLeft = setInterval(function () {
        timeRemaining--;
        clock.textContent = `Time: ${timeRemaining} seconds left!`;
    
        if (timeRemaining === 0) {
            clearInterval(clockLeft);
        };
    }, 1000);
};

function formatQuiz () {
       
};


startQuiz();