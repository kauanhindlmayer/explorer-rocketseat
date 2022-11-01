const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');

// Programação imperativa
//                          event    callback function
buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');
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