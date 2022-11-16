const form = document.getElementById('form')
const username = document.getElementById('username')
const number = document.getElementById('number')
const address = document.getElementById('address')
const message = document.getElementById('message')
const email = document.getElementById('email')



form.addEventListener ('submit', (e) =>{
    e.preventDefault()

    checkInputs ()

})

function checkInputs() {
    const usernameValue = username.value.trim()
    const numberValue = number.value.trim()
    const addressValue = address.value.trim()
    const messageValue = message.value.trim()
    const emailValue = email.value.trim()

    if (usernameValue === '') {
        //mostrar erro e adcionar uma classe erro
        errorValidation(username, 'Preencha esse Campo')
    } else {
        //add class de sucesso
        successValidation(username)
    }

    if (numberValue === '') {
        //mostrar erro e adcionar uma classe erro
        errorValidation(number, 'Preencha esse Campo')
    }
    else {
        //add class de sucesso
        successValidation(number)
    }

    if (addressValue === '') {
        //mostrar erro e adcionar uma classe erro
        errorValidation(address, 'Preencha esse Campo')
    } else {
        //add class de sucesso
        successValidation(address)
    }

    if (messageValue === '') {
        //mostrar erro e adcionar uma classe erro
        errorValidation(message, 'Este Campo não pode está Vazio*')
    } else {
        //add class de sucesso
        successValidation(message)
    }

    if (emailValue === '') {
        //mostrar erro e adcionar uma classe erro
        errorValidation(email, 'Preencha este Campo')
    }else if (!isEmail(emailValue)) {
        errorValidation(email, 'Email inválido')
    } 
     else {
        //add class de sucesso
        successValidation(email)
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small', 'input')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}