const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

startBtnEl.addEventListener('click', onSwitchStart);
stopBtnEl.addEventListener('click', onSwitchStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let timerId = null;
stopBtnEl.setAttribute('disabled', true);

function switchColorBcg() {
  return (document.body.style.backgroundColor = getRandomHexColor());
}

function onSwitchStart() {
  timerId = setInterval(switchColorBcg, 1000);
  stopBtnEl.removeAttribute('disabled');
  startBtnEl.setAttribute('disabled', true);
}

function onSwitchStop() {
  clearInterval(timerId);
  startBtnEl.removeAttribute('disabled');
  stopBtnEl.setAttribute('disabled', true);
}
