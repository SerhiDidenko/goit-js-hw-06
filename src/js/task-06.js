const validationInput = document.querySelector('#validation-input');
const count = +validationInput.dataset.length

const checkInput = (event) => {
    if(event.target.value.length === count) {
        validationInput.className = 'valid'
        return
    }
    validationInput.className = 'invalid'
}

validationInput.addEventListener('blur', checkInput);