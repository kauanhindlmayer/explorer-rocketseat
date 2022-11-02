import sounds from "./sounds.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  const reset = () => {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  const updateDisplay = (newMinutes, seconds) => {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  const countdown = () => {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);
  
      if (isFinished) { 
        resetControls();   
        updateDisplay();
        sounds().timeEnd();
        return;
      };
  
      if (seconds <= 0) {
        seconds = 60;
        minutes--;
      }
  
      updateDisplay(minutes, String(seconds - 1));
      
      countdown();
    }, 1000)
  }

  const updateMinutes = (newMinutes) => {
    minutes = newMinutes;
  }

  const hold = () => {
    clearTimeout(timerTimeOut);
  }

  return {
    countdown,
    updateDisplay,
    reset,
    updateMinutes,
    hold
  }
}
