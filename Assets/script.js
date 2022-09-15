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
    const homepage = document.getElementById("#homepage-card");
    const quiz = document.getElementById("#quiz-card");
    const highscore = document.getElementById("#highscore-card");
    const endPage = document.getElementById("#finish-page-card");
// link buttons for later logical use
    let startButton = document.getElementById("#Start-Btn");
    let A = document.getElementById ("#A");
    let B = document.getElementById ("#B");
    let C = document.getElementById ("#C");
    let D = document.getElementById ("#D");
// time variables for function use
    let clock = document.getElementById( "#clock") 
    let home = document.getElementById("homepage")
    let timeRemaining = 60;
// index variables
    let questionNumber = 0;
    let liveClock;
    let correctChoice;
    
// 
    function startQuiz() {

    };


    function renderChoices() {

        renderChoiceA() {
            if (choice === A && A === correct) {
                quiz.innerHTML = "Correct choice!";
        } else {
            quiz.innerHTML = "Incorrect choice!";
        }
    }

        renderChoiceB() {
            if (choice === B && B === correct) {
                quiz.innerHTML = "Correct choice!";
        } else {
            quiz.innerHTML = "Incorrect choice!";
        }
    }

        renderChoiceC() {
            if (choice === C && C === correct) {
                quiz.innerHTML = "Correct choice!";
        } else {
            quiz.innerHTML = "Incorrect choice!";
        }
    }

        renderChoiceD() {
            if (choice === D && D === correct) {
                quiz.innerHTML = "Correct choice!";
        } else {
            quiz.innerHTML = "Incorrect choice!";
        }
    }
};








function renderChoiceA() {
}

function renderChoiceB() {
}

function renderChoiceC() {
}

function renderChoiceD() {
}

