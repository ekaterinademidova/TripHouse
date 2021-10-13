const formSearch = document.querySelector('.search-form');
const listInputs = formSearch.querySelectorAll('.search-form__field');

const inputName = formSearch.querySelector('#inputName');

const inputDates = formSearch.querySelector('#inputDates');

const inputVR = formSearch.querySelector('#inputVR');
const selection = formSearch.querySelector('#selection');
const listStrings = formSearch.querySelectorAll('.selection__string');
statusSel = false;

const btnSearchForm = formSearch.querySelector('.search-form__submit')

for(let i = 0; i < listInputs.length; i++) {
    listInputs[i].onfocus = function() { listInputs[i].classList.add('active-field'); };
    listInputs[i].onblur = function() { listInputs[i].classList.remove('active-field'); };
}

document.addEventListener('click', function(event) {
    event.preventDefault();
    if (statusSel) {
        const el = event.target;

        const parent = selection;
        let current = el;
        let isChild = false;

        while(current = current.parentNode)
        {
            if(current == parent) {
                isChild = true;
            }
        }
        if (el != selection && !isChild && el != inputVR) {
            selection.style.display = 'none';
            statusSel = false;
        }
    }
});

inputVR.addEventListener('click', function() {
    if (!statusSel) {
        selection.style.display = 'block';
        statusSel = true;
    }
});

for(let i = 0; i < listStrings.length; i++) {
    const down = listStrings[i].querySelector('.down');
    const up = listStrings[i].querySelector('.up');
    const count = listStrings[i].querySelector('.count');

    down.addEventListener('click', function() {
            deleteEvent(down, count);
    });

    up.addEventListener('click', function() {
            addEvent(down, count);
    });
}

const deleteEvent = (down, count) => {
    let val = +count.textContent;
    if (val > 0) {
        val--;
    }
    if (val == 0) {
        down.classList.add('invisible');
    }
    count.textContent = val;
    result();
};

const addEvent = (down, count) => {
    let val = +count.textContent + 1;
    count.textContent = val;
    down.classList.remove('invisible');
    result();
};

const result = () => {
    const adults = +selection.querySelector('.amount-adults').textContent;
    const children = +selection.querySelector('.amount-children').textContent;
    let rooms = +selection.querySelector('.amount-rooms').textContent;

    const age = document.querySelector('.additionally');
    const roomsString = selection.querySelector('.rooms');
    const roomsElem = roomsString.querySelector('.amount-rooms');
    const roomsDown = roomsString.querySelector('.down');

    if(children > 0) {
        age.style.display = 'block';
    } else {
        age.style.display = 'none';
    }

    if(adults > 0 && rooms == 0) {
        rooms = 1;
        roomsElem.textContent = rooms;
    } else if(rooms >= 0 && adults == 0) {
        rooms = 0;
        roomsElem.textContent = rooms;
        roomsDown.classList.add('invisible');
    } else if(rooms == 1 && adults >= 1) {
        roomsDown.classList.add('invisible');
    }
    
    inputVR.setAttribute('value', `${adults} Adults — ${children} Children — ${rooms} Room`)
};

btnSearchForm.addEventListener('click', function(event) {
    event.preventDefault();
    const delimeter = " — "; 

    const name = inputName.value.trim();

    const dates = inputDates.value;
    const datesArray = dates.split(delimeter, 2);

    const info = inputVR.value;
    const infoArray = info.split(delimeter, 3);

    let str = '';

    if (name.length) {
        str += `
        Place: ${name};`;
    }
    if (datesArray[0] == datesArray[1]) {
        str += `
        Date: ${datesArray[0]};`;
    } else {
        str += `
        Start date: ${datesArray[0]};
        End date: ${datesArray[1]};`;
    }
    if (info.length) {
        str += `
        Information: ${infoArray[0]}, ${infoArray[1]}, ${infoArray[2]}.`;
    }

    if (str.length) {
        alert(str);
    }
})