function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amount = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls [data-create]');
const destroyBtn = document.querySelector('#controls [data-destroy]');
const boxes = document.querySelector('#boxes');

const createBoxes = () => {

  let lastBoxSize = boxes?.lastChild?.clientWidth + 10 || 30

  const list = Array.from({ length: amount.value })
    .reduce((acc, item) => {
      let boxItem = document.createElement('div')
      boxItem.style.width = `${lastBoxSize}px`
      boxItem.style.height = `${lastBoxSize}px`
      lastBoxSize += 10
      boxItem.style.backgroundColor = getRandomHexColor()
      acc.push(boxItem)
      return acc
    }, [])
  
    boxes.append(...list)
}

const destroyBoxes = () => {
  [...boxes.childNodes].forEach(node => node.remove());
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);