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

let statusNL = false;

const burger = document.querySelector('.burger');
const textList = document.querySelector('.text-list');
const nestedList = textList.querySelector('.header__list');

burger.addEventListener('click', () => {
    nestedList.classList.add('nested-list');
    nestedList.style.display = 'block';
    statusNL = true;
});

document.addEventListener('click', function(event) {
    event.preventDefault();
    if (statusNL) {
        const el = event.target;

        const parent = nestedList;
        let current = el;
        let isChild = false;

        while(current = current.parentNode)
        {
            if(current == parent) {
                isChild = true;
            }
        }
        if (el != nestedList && (!isChild || (isChild && el.tagName == 'A')) && el != burger) {
            nestedList.classList.remove('nested-list');
            nestedList.style.display = 'none';
            statusNL = false;
        }
    }
});

window.onresize = function() {
    if (window.innerWidth > 768) {
        nestedList.classList.remove('nested-list');
        nestedList.style.display = 'flex';
        burger.style.display = 'none';
    } else {
        nestedList.classList.add('nested-list');
        nestedList.style.display = 'none';
        burger.style.display = 'block';
    }
    statusNL = false;
};