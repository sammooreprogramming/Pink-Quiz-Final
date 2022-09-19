// Questions Array
let questionsArray = [
    {
        question: "The div element is what exactly?",
        choices: ["A a container", "B a divider", "C a function", "D a page"],
        correct: A
        
    },
    {
        question: "What symbol represents a terminator?",
        choices: ["A a ';'", "B a '%'", "C a '&'", "D a '*'"],
        correct: A
    },
    {
        question: "I'm glad I have _______ to apply the functionality.",
        choices: ["A HTML", "B CSS", "C  Javascript", "D Java"],
        correct: C
    },
    {
        question: "What does the var command do?",
        choices: ["A  creates a document", "B creates a variable", "C creates a function", "creates parameters"],
        correct: B
    }];
    
// define variables for cards to display later
    const homepage = document.querySelector("#Homepage");
    const quiz = document.querySelector("#Quiz");
    const highscore = document.querySelector("#Leaderboard");
    const endPage = document.querySelector("#Endpage");
// link buttons for later logical use
    let startButton = document.querySelector("#Start-Btn");
    let A = document.querySelector ("#buttonA");
    let B = document.querySelector ("#buttonB");
    let C = document.querySelector ("#buttonC");
    let D = document.querySelector ("#buttonD");
    let endButton = document.querySelector ("#EndButton");
// time variables for function use
    let clock = document.querySelector("#clock") 
    let home = document.querySelector("homepage")
    let timeRemaining = 60;
// index variables
    let questionNumber = 0;
    let liveClock;
    let correctChoice;
    
// i'm working

startButton.addEventListener("click", startQuiz);

A.style.display = "none";
B.style.display = "none";
C.style.display = "none";
D.style.display = "none";

function startQuiz() {
    
homepage.style.display = "none";
quiz.style.display = "block";

A.style.display = "block";
B.style.display = "block";
C.style.display = "block";
D.style.display = "block";
}

