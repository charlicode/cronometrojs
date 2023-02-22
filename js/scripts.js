const minutesElement = document.querySelector("#minutes")
const secondsElement = document.querySelector("#seconds")
const millisecondsElem = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;



startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);


function startTimer() {
    
    interval = setInterval(() => {

        if (!isPaused) {

            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesElement.textContent = formatTime(minutes)
            secondsElement.textContent = formatTime(seconds)
            millisecondsElem.textContent = formatMillis(milliseconds)
        }

    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";


}

function pauseTimer() {
    isPaused = true
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
   
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
    } 
    
function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    millisecondsElem.textContent = "000";
    
    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
    resetBtn.style.display = "block";

    isPaused = false;
}


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMillis(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}