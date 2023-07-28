const form = document.querySelector('form.login-form');

const checkForm = (event) => {
    event.preventDefault()

    const formData = event.target.elements

    const { email, password} = formData

    if (email.value === '' || password.value === '') {
        alert('All fields must be filled!');
        return
    }
    
    console.log({ email: email.value, password: password.value })
    form.reset()
}

form.addEventListener('submit', checkForm);
