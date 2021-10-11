const btnOpenClose = document.querySelector('#btnOpenClose');
const btnIcon = btnOpenClose.querySelector('i');
let listDCards = document.querySelectorAll('.destinations__cards');

let btnStatus= false;

const listDCats = document.querySelectorAll('.destinations__item');

const regions = document.querySelector('.regions');
const cities = document.querySelector('.cities');
const places = document.querySelector('.places');

const tabClick = (index) => {
    for(let i = 0; i < listDCats.length; i++) {
        listDCats[i].classList.remove('active');
    }
    listDCats[index].classList.add('active');
    if(listDCats[index].classList.contains('show-regions')) {
        showContent('grid', 'none', 'none');
    } else if (listDCats[index].classList.contains('show-cities')) {
        showContent('none', 'grid', 'none');
    } else {
        showContent('none', 'none', 'grid');
    }
};

const showContent = (r, c, p) => {
    regions.style.display = r;
    cities.style.display = c;
    places.style.display = p;
};

for(let i = 0; i < listDCats.length; i++) {
    listDCats[i].addEventListener('click', function() { 
        tabClick(i);
    });
}

const btnClick = () => {
    if (btnStatus) {
        for(let i = 0; i < listDCards.length; i++) {
            listDCards[i].classList.remove('full');
        }
        btnIcon.classList.remove('fa-chevron-up');
        btnIcon.classList.add('fa-chevron-down');
        btnStatus = false;
    }
    else {
        for(let i = 0; i < listDCards.length; i++) {
            listDCards[i].classList.add('full');
        }
        btnIcon.classList.remove('fa-chevron-down');
        btnIcon.classList.add('fa-chevron-up');
        btnStatus = true;
    }
};

btnOpenClose.addEventListener('click', function() { 
    btnClick();
});