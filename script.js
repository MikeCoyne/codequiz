var timerEl = document.getElementById();
var mainEl = document.getElementById();
var optionsListEl = document.getElementById();
var count  = localStorage.getItem("count");
var message = 'Game Over';

var mainEl = document.getElementById("body");

var secondsLeft = 100;


var question = 
variables


// timer
function countdown() {
    var timeLeft = 100

    var timeInterval = setInterval(function () {
        if (timeLeft > 1 {
            timerEl.textContent = timeLeft + ' time remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
        )
    }, 1000);
}
countdown();






// button
saveButton.addEventListener("click", function(event) {
    var finalScore = {
        player: player.value,
        score: finalScore.value,
        comment: comment.value.trim()
    };
    localStorage.setItem("finalScore", JSON.stringify(finalScore));
    renderMessage();
});

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft = "Time Remaining";

        if(secondsLeft === 0) {
             clearInterval(timeInterval);
             displayMessage();
        }
    }, 1000);
}




function displayMessage() {
    timeEl.textContent = "Game Over";
    var imgEl = document.createElement("img");
    imgEl.setAttritbute("src", " ");
    mainEl.appendChild(imgEl);
}

setTime();


// store scores from game
localStorage.setItem("highScores", JSON.stringify(FinalScore));
renderMessage();
countdown();

