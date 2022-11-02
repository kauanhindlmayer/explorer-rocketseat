const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
let minutes;
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

const countdown = () => {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    secondsDisplay.textContent =  String(seconds -1).padStart(2, "0");

    if (minutes <= 0) { 
      buttonPlay.classList.remove('hide');
      buttonPause.classList.add('hide');
      buttonSet.classList.remove('hide');
      buttonStop.classList.add('hide');      
      return;
    };

    if (seconds <= 0) {
      seconds = 10;
      minutesDisplay.textContent = String(minutes -1).padStart(2, "0");
    }
    
    countdown();
  }, 1000)
}

// Programação imperativa
//                          event    callback function
buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');

  countdown();
});

//                          event    callback function
buttonPause.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');  
});

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonSet.classList.remove('hide');
  buttonStop.classList.add('hide');
});

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
});

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
});

buttonSet.addEventListener('click', () => {
  minutes = prompt('Quantos minutos?');
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
})