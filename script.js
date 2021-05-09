//variables to track quiz state
var timeLeft = 30;
var displayMessage = 'Game Over';
var promptIndex = 0
//var savedScore = document.querySelector("");
//var countdown = start();
//variables to reference DOM manipulation
var nameInput = document.querySelector("#name");
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById('question');

//var quizQuestions = document.getElementById();
// var count  = localStorage.getItem("count");

let score = document.getElementById("")


let timeInterval;


//arrays holding questions, choices, and correct answers
const quizQuestions = [
    {prompt: "Arrays in JS can be used to store ______.",
     choices: ["booleans", "other arrays", "numbers and strings", "all of the above"],
     answer: "all of the above",
    },
    {prompt: "A Boolean value is always ______.",
     choices: ["a string", "an array", "numbers and strings", "true or false"],
     answer: "true or false",
    },
    {prompt: "A string is always written in ______.",
     choices: ["data", "other arrays", "quotation marks", "all of the above"],
     answer: "quotation marks",
    },
    {prompt: " HTML stands for ______.",
     choices: ["boolean", "hyper time malt liquor", "hyper text markup language", "all of the above"],
     answer: "hyper text markup language",
    },
    {prompt: " JS stands for ______.",
     choices: ["boolean", "just stuff", "javascript", "all of the above"],
     answer: "javascript",
    },
     
]

var quizAnswers = [
    
]

function start() {
    //document.getElementById('startTimer').innerHTML = "10 seconds"; 
    
    countdown();

    displayQuestion();
}


let currentQuestion = 0;

function displayQuestion() {
    var choice0 = quizQuestions[currentQuestion].choices[0];
    var choice1 = quizQuestions[currentQuestion].choices[1];
    var choice2 = quizQuestions[currentQuestion].choices[2];
    var choice3 = quizQuestions[currentQuestion].choices[3];




    //console.log(quizQuestions[currentQuestion].prompt)
    questionEl.innerHTML = quizQuestions[currentQuestion].prompt;
    for (i = 0; i < quizQuestions[currentQuestion].choices.length; i ++) {
    document.getElementById('options3').innerHTML = `
    <ul>
        <li><button id="choice-0">${choice0}</button></li>
        <li><button id="choice-1">${choice1}</button></li>
        <li><button id="choice-2">${choice2}</button></li>
        <li><button id="choice-3">${choice3}</button></li>
    </ul>
    `;
    document.getElementById("choice-0").addEventListener('click', function() {
        handleAnswer(currentQuestion, choice0)
    })
    document.getElementById("choice-1").addEventListener('click', function() {
        handleAnswer(currentQuestion, choice1)
    })
    document.getElementById("choice-2").addEventListener('click', function() {
        handleAnswer(currentQuestion, choice2)
    })
    document.getElementById("choice-3").addEventListener('click', function() {
        handleAnswer(currentQuestion, choice3)
    })
    }
}
//needs to evaluate correct answers, penalize 2 seconds on wrong answer
function handleAnswer(questionIndex, userAnswer) {
    var correctAnswer = quizQuestions[questionIndex].answer;
    
    console.log("correctAnswer " + correctAnswer)
    quizAnswers[questionIndex] = userAnswer;
    if (correctAnswer !== userAnswer) {
        console.log("wrong answer")
        timeLeft -=2;
         
        console.log("time penalty " + timeLeft)
    }
    
    //console.log("quizAnswers " + quizAnswers)
    if (questionIndex === 4) {
        //have tried == and ===...
        //stop timer = final score -end game...
        console.log("final score " + timeLeft)
        // Show final score on screen, ask to save high scores
        clearInterval(timeInterval);
        //return timeLeft;
        window.alert("Your score was " + timeLeft);
        displayMessage("game over");
    }
    currentQuestion++;
    displayQuestion();
}




startBtn.addEventListener("click", function() {
    start()
})


function displayMessage() {
     document.getElementById("question").innerHTML = "Game Over";


//     timeEl.textContent = "Game Over";
//     var imgEl = document.createElement("img");
//     imgEl.setAttritbute("src", " ");
//     mainEl.appendChild(imgEl);
 }

// timer
function countdown() {
    //var timeLeft = 10

    timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + ' time remaining';
        if (timeLeft === 0) {
           clearInterval(timeInterval);
           document.getElementById("welcome").hide;
           console.log("time left?");
           //displayMessage();
           //getting error: display message not a function
        } else if (timeLeft > 0) {
            timeLeft--;
            console.log("timeLeft " + timeLeft);
        } 
        
    }, 1000);
}

// let saveBtn;
// let highScore;

// //  Save button
 //saveBtn.addEventListener("click", function() {
//     var finalScore = {
//         name: player.value,
//         score: finalScore.value,
////         //comment: comment.value.trim()
// };
//     localStorage.setItem("score", JSON.stringify(finalScore));
//     renderMessage(); 
// });

// var savedScore = {
//       //name: name.value,
//       //"score": finalScore.value,
//       "playerName": nameInput.value,
//       //comment: comment.value.trim()
//     };



saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    
    console.log("timeLeft");
    localStorage.setItem("finalScore", JSON.stringify(finalScore));
    renderMessage();
    
    });

//console.log(JSON.parse(localStorage.getItem("finalSCore")));






// var finalScore = {  };
// localStorage.setItem('finalScore', JSON.stringify(finalScore));