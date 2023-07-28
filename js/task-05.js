const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const changeText = (event) => {
    nameOutput.textContent = event.target.value === '' ? 'Anonymous' : event.target.value
}

nameInput.addEventListener('input', changeText);