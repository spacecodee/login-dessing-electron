const {remote} = require('electron');
const main = remote.require('./main');
const formLogin = document.getElementById('login');
const txtMail = document.getElementById('txtEmail');
const password = document.getElementById('pwsPass');

const btnLink = document.querySelector('.linkRegister');
btnLink.addEventListener('click', function () {
    document.querySelector('.register').classList.toggle('active');
    document.querySelector('.login-register').classList.toggle('deactive');
});

const btnLogin = document.querySelector('.linkLogin');
btnLogin.addEventListener('click', function () {
    document.querySelector('.register').classList.toggle('active');
    document.querySelector('.login-register').classList.toggle('deactive');
});

formLogin.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();

        const login = {
            email: txtMail.value,
            passw: password.value
        };

        await main.loginUser(login);
    } catch (error) {
        console.log(error);
    }
});
