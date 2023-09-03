const password = document.getElementById('password');
password.addEventListener('input', () => {
    if (password.value.length < 4) {
        password.style.borderBottom = '3px solid red'
    }
    else if(password.value.length >= 4 && password.value.length < 8){
        password.style.borderBottom = '3px solid yellow'
    }
    else if(password.value.length > 8){
        password.style.borderBottom = '3px solid green'
    }
})