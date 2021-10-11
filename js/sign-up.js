const btnClose = document.querySelector('#closeSU');
const btnClose2nd = document.querySelector('#closeSU2nd');
const signUp = document.querySelector('#sign-up');
const signUp2nd = document.querySelector('#sign-up-2nd');

const closeClick = (sign) => {
    sign.style.display = 'none';
};

btnClose.addEventListener('click', function() {
    closeClick(signUp);
});

btnClose2nd.addEventListener('click', function() {
    closeClick(signUp2nd);
});