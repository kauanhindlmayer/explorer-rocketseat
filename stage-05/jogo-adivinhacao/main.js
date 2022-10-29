// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    handleTryClick();
  }
});

// Funções
function handleTryClick(event) {
  event.preventDefault();

  console.log(randomNumber);

  const inputNumber = document.querySelector('#inputNumber');

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    document.querySelector(".screen2 h2").innerText = `Você acertou em ${xAttempts} tentativas!`;
  }

  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();

  xAttempts = 1;
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}