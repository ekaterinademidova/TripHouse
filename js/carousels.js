let carouselHomes = {
    width: 312,
    count: 4,
    list: homes__carousel.querySelector('ul'),
    listElems: homes__carousel.querySelectorAll('li'),
    position: 0,
    prev: homes__carousel.querySelector('#prevH'),
    next: homes__carousel.querySelector('#nextH')
};

let carouselReviews = {
    width: 416,
    count: 3,
    list: reviews__carousel.querySelector('ul'),
    listElems: reviews__carousel.querySelectorAll('li'),
    position: 0,
    prev: reviews__carousel.querySelector('#prevR'),
    next: reviews__carousel.querySelector('#nextR')
};

const prevClick = (carousel) => {
    carousel.position += carousel.width * carousel.count;
    carousel.position = Math.min(carousel.position, 0)
    carousel.list.style.marginLeft = carousel.position + 'px';
    if (carousel.position !== -carousel.width * (carousel.listElems.length-carousel.count)) {
        carousel.next.style.display = 'flex';
    }
    if (carousel.position === 0) {
        carousel.prev.style.display = 'none';
    }
};

const nextClick = (carousel) => {
    carousel.position -= carousel.width * carousel.count;
    carousel.position = Math.max(carousel.position, -carousel.width * (carousel.listElems.length - carousel.count));
    carousel.list.style.marginLeft = carousel.position + 'px';
    if (carousel.position !== 0) {
        carousel.prev.style.display = 'flex';
    }
    if (carousel.position === -carousel.width * (carousel.listElems.length-carousel.count)) {
        carousel.next.style.display = 'none';
    }
};

carouselHomes.prev.addEventListener('click', function() { 
    prevClick(carouselHomes)
});

carouselHomes.next.addEventListener('click', function() { 
    nextClick(carouselHomes)
});

carouselReviews.prev.addEventListener('click', function() { 
    prevClick(carouselReviews)
});

carouselReviews.next.addEventListener('click', function() { 
    nextClick(carouselReviews)
});