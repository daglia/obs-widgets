document.addEventListener("DOMContentLoaded", updateTimer);

const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;
const beep = new Audio("/assets/sounds/beep.wav");
beep.loop = true;
let timer;
let isWorking = true;
let isPaused = true;
let timeLeft = WORK_TIME;

function startPauseWorkTimer() {
  if (isPaused) {
    isPaused = false;
    timer = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        playBeep();
        clearInterval(timer);
        isWorking = !isWorking;
        timeLeft = isWorking ? WORK_TIME : BREAK_TIME;
        startPauseWorkTimer();
      }
      updateTimer();
    }, 1000);
  } else {
    isPaused = true;
    clearInterval(timer);
  }
  updateStartPauseButton();
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").textContent = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function updateStartPauseButton() {
  document.getElementById("start-pause-work-button").innerHTML = isPaused
    ? "Start"
    : "Pause";
}

function playBeep() {
  beep.play();
  setTimeout(() => {
    beep.pause();
  }, 500);
}
