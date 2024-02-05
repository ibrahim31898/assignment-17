var minutes = 1;
var seconds = 0;
var miliseconds = 0;

var hoursDisp = document.getElementById("hoursDisp");
var minsDisp = document.getElementById("minsDisp");
var secondsDisp = document.getElementById("secondsDisp");
var milisecondsDisp = document.getElementById("milisecondsDisp");

function renderTimer() {
    hoursDisp.innerHTML = "00";
    minsDisp.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    secondsDisp.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    milisecondsDisp.innerHTML = miliseconds < 10 ? "0" + miliseconds : miliseconds;
}

var interval;

function startTimer() {
    interval = setInterval(function(){
        if (miliseconds === 0 && seconds === 0 && minutes === 0) {
            stopTimer();
            return;
        }

        miliseconds--;
        if (miliseconds < 0) {
            miliseconds = 9;
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
        }
        renderTimer();
    }, 100);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    minutes = 1;
    seconds = 0;
    miliseconds = 0;
    renderTimer();
}
