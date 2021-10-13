let carouselHomes = {
    list: homes__carousel.querySelector('ul'),
    listElems: homes__carousel.querySelectorAll('li'),
    position: 0,
    prev: homes__carousel.querySelector('#prevH'),
    next: homes__carousel.querySelector('#nextH')
};

let carouselReviews = {
    list: reviews__carousel.querySelector('ul'),
    listElems: reviews__carousel.querySelectorAll('li'),
    position: 0,
    prev: reviews__carousel.querySelector('#prevR'),
    next: reviews__carousel.querySelector('#nextR')
};

let width;
let count;

const values = (slider, c1, c2, c3) => {
    const wrap = document.querySelector('.homes .wrapper').offsetWidth;
    width = slider.querySelector('li').offsetWidth+16;
    count = wrap > 768 ? c1 : (wrap <=  500 ? c3 : c2);
};

const prevClick = (carousel, width, count) => {
    carousel.position += width * count;
    carousel.position = Math.min(carousel.position, 0)
    carousel.list.style.marginLeft = carousel.position + 'px';
    if (carousel.position !== -width * (carousel.listElems.length-count)) {
        carousel.next.style.display = 'flex';
    }
    if (carousel.position === 0) {
        carousel.prev.style.display = 'none';
    }
};

const nextClick = (carousel, width, count) => {
    carousel.position -= width * count;
    carousel.position = Math.max(carousel.position, -width * (carousel.listElems.length - count));
    carousel.list.style.marginLeft = carousel.position + 'px';
    if (carousel.position !== 0) {
        carousel.prev.style.display = 'flex';
    }
    if (carousel.position === -width * (carousel.listElems.length-count)) {
        carousel.next.style.display = 'none';
    }
};

carouselHomes.prev.addEventListener('click', function() {
    values(homes__carousel, 4, 3, 2);
    prevClick(carouselHomes, width, count);
});

carouselHomes.next.addEventListener('click', function() {
    values(homes__carousel, 4, 3, 2);
    nextClick(carouselHomes, width, count);
});

carouselReviews.prev.addEventListener('click', function() {
    values(reviews__carousel, 3, 2, 1);
    prevClick(carouselReviews, width, count);
});

carouselReviews.next.addEventListener('click', function() {
    values(reviews__carousel, 3, 2, 1);
    nextClick(carouselReviews, width, count);
});