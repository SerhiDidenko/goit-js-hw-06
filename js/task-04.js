const descButton = document.querySelector('button[data-action="decrement"]')
const incButton = document.querySelector('button[data-action="increment"]')

let counterValue = 0
const counter = document.querySelector('#value');

const clickEvent = (event) => {
    let type = event.target.dataset.action
    let step = type === "decrement" ? -1 : 1
    counterValue += step
    counter.textContent = counterValue;
}

descButton.addEventListener('click', clickEvent);
incButton.addEventListener('click', clickEvent);