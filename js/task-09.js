const button = document.querySelector('button.change-color');
const span = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const setRandomColor = () => {
  let randColor = getRandomHexColor();

  document.body.style.backgroundColor = randColor;
  
  span.textContent = randColor;
}

button.addEventListener('click', setRandomColor);

