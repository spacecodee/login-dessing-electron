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
