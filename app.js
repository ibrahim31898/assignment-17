let hoursInput = document.getElementById('hoursInput');
let minsInput = document.getElementById('minsInput');
let secondsInput = document.getElementById('secondsInput');
let millisecondsInput = document.getElementById('millisecondsInput');

let hours = 0;
let mins = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

function startTimer() {
    hours = parseInt(hoursInput.value) || 0;
    mins = parseInt(minsInput.value) || 0;
    seconds = parseInt(secondsInput.value) || 0;
    milliseconds = parseInt(millisecondsInput.value) || 0;

    timer = setInterval(updateTimer, 10);
}

function updateTimer() {
    if (milliseconds === 0) {
        if (seconds === 0) {
            if (mins === 0) {
                if (hours === 0) {
                    clearInterval(timer);
                    return;
                }
                hours--;
                mins = 59;
            } else {
                mins--;
            }
            seconds = 59;
        } else {
            seconds--;
        }
        milliseconds = 99;
    } else {
        milliseconds--;
    }

    document.getElementById('hoursDisp').innerText = pad(hours);
    document.getElementById('minsDisp').innerText = pad(mins);
    document.getElementById('secondsDisp').innerText = pad(seconds);
    document.getElementById('milisecondsDisp').innerText = pad(milliseconds);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hoursInput.value = '';
    minsInput.value = '';
    secondsInput.value = '';
    millisecondsInput.value = '';
    hours = 0;
    mins = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('hoursDisp').innerText = '00';
    document.getElementById('minsDisp').innerText = '00';
    document.getElementById('secondsDisp').innerText = '00';
    document.getElementById('milisecondsDisp').innerText = '00';
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

