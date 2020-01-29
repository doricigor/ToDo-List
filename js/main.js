const form = document.querySelector('#form');
const aList = document.querySelector('.active__list');
const dList = document.querySelector('.deactive__list');

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

let showTime = document.querySelector('.time');
showTime.textContent = time;



form.addEventListener('submit', addItem);
aList.addEventListener('click', removeItem);
dList.addEventListener('click', removeItem);


function addItem(e) {
    e.preventDefault();
    let input = document.querySelector('.todo__input').value;

    if (input !== '') {
        let li = document.createElement('li');
        li.className = 'active__item';
        li.innerText = input;

        const del = document.createElement('button');
        del.className = 'btn btn-danger float-right delete';
        del.innerText = 'x';

        const box = document.createElement('input');
        box.className = 'checkbox';
        box.setAttribute('type', 'checkbox');

        li.appendChild(box);
        li.appendChild(del);
        aList.appendChild(li);
    } else {
        alert('Insert your task!');
    }
    document.querySelector('.todo__input').value = '';
}


function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        const item = e.target.parentElement;
        if (item.classList.contains('active__item')) {
            aList.removeChild(item);
        } else {
            dList.removeChild(item);
        }
    }
    if ((e.target.classList.contains('checkbox'))) {
        const done = e.target.parentElement;
        if (done.classList.contains('active__item')) {
            done.classList.remove('active__item');
            done.className = 'deactive__item';
            e.target.className = 'checkbox checked';
            dList.appendChild(done);
        } else {
            done.classList.remove('deactive__item');
            done.className = 'active__item';
            e.target.className = 'checkbox unchecked';
            aList.appendChild(done);
        }
    }
}