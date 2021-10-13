const formSignIn = document.querySelector('.sign-in-form');

const errEmail = formSignIn.querySelector('.err-email');
const email = formSignIn.querySelector('.email');
const errPass = formSignIn.querySelector('.err-password');
const password = formSignIn.querySelector('.password');

const btnSignIn = formSignIn.querySelector('.sign-in__btn');

const r = new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');

let userEmail = '';

const validation = (message, el, visibility, backlight) => {
    message.style.display = visibility;
    el.style.border = backlight;
};

btnSignIn.addEventListener('click', function(event) {
    event.preventDefault();

    if (r.test(email.value)) {
        validation(errEmail, email, 'none', '2px solid var(--secondary-text)');

        if (password.value.length >= 6) {
            validation(errPass, password, 'none', '2px solid var(--secondary-text)');
            userEmail = email.value;
            email.value = '';
            password.value = '';
            alert(`Registration by email ${userEmail} has been successfully completed!`);
        } else  {
            validation(errPass, password, 'inline-block', '2px solid red');
        }
    }  else {
        validation(errEmail, email, 'inline-block', '2px solid red');
    }
});

