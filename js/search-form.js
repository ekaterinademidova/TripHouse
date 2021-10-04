const inputVR = document.querySelector('#inputVR');
const selection = document.querySelector('#selection');

const listStrings = document.querySelectorAll('.selection__string');

statusSel = false;

const listInputs = document.querySelectorAll('.search-form__field');

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