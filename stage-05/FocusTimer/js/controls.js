export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
}) {

  const play = () => {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');
  }

  const pause = () => {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');  
  }

  const reset = () => {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonSet.classList.remove('hide');
    buttonStop.classList.add('hide');
  }

  const getMinutes = () => {
    let newMinutes = prompt('Quantos minutos?');

    if (!newMinutes) {
      return false;
    }
  
    return newMinutes;
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}