import { Modal } from "./modal.js";

// variáveis - variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notNumber(weight) || notNumber(height);

  if (showAlertError) {
    alert('Apenas números são permitidos!');
    return;
  }

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;
  
  Modal.open();
  Modal.message.innerText = message;
}

const notNumber = (value) => {
  return isNaN(value) || value == "";
}

const IMC = (weight, height) => {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}