import { Controls } from './controls.js';
import { Timer } from './timer.js';

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls: controls.reset,
});

// Programação imperativa X Programação Declarativa
buttonPlay.addEventListener('click', () => {
  controls.play();
  timer.countdown();
});

buttonPause.addEventListener('click', () => {
  controls.pause();
  clearTimeout(timerTimeOut);
});

//                          event    callback function
buttonStop.addEventListener('click', () => {
  controls.reset();
  timer.reset();
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
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    timer.reset();
    return;
  }

  minutes = newMinutes;
  timer.updateDisplay(minutes, 0);
})