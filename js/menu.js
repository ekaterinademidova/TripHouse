const intro = document.querySelector('.show-intro');
const line = intro.querySelector('.header__link-underline');
const introContent = document.querySelector('.intro');
const auth = document.querySelector('.show-authorization');
const light = auth.querySelector('path');
const authContent = document.querySelector('.authorization');

intro.addEventListener('click', function() {
    introContent.style.display = 'block';
    line.style.display = 'block';
    authContent.style.display = 'none';
    light.style.fill = 'var(--general-white)';
});

auth.addEventListener('click', function() {
    authContent.style.display = 'block';
    introContent.style.display = 'none';
    line.style.display = 'none';
    light.style.fill = 'var(--accent-yellow)';
});