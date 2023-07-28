const sizeControl = document.querySelector('#font-size-control');
const resizeText = document.querySelector('#text');

const changeSize = (event) => {
    resizeText.style.fontSize = `${event.target.value }px`
}

sizeControl.addEventListener('input', changeSize);