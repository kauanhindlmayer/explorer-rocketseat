export function Timer({
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

  const updateDisplay = (minutes, seconds) => {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  const countdown = () => {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
  
      updateDisplay(minutes, 0);
  
      if (minutes <= 0) { 
        resetControls();   
        return;
      };
  
      if (seconds <= 0) {
        seconds = 10;
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
