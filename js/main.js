const form = document.querySelector('#form');
const aList = document.querySelector('.active__list');
const dList = document.querySelector('.deactive__list');
const check = document.querySelectorAll('.checkbox');

// const checkArr = Array.of(check);
// checkArr.forEach(e => {
//     e.addEventListener('click', checked);
// });


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
}


// function checked(e) {
//     if (e.target.classList.contains('checkbox')) { 
//         const checkItem = e.target.parentElement;
//         if (checkItem.classList.contains('.active__item')) {
//             checkItem.classList.remove('active__item');
//             checkItem.className = 'deactive__item';
//             dList.appendChild(checkItem);
//         } 
//         if (checkItem.classList.contains('.deactive__item')){
//             checkItem.classList.remove('deactive__item');
//             checkItem.className = 'active__item';
//             aList.appendChild(checkItem);
//         }
//     }
// }

    // if (e.target.classList.contains('checkbox')) {
    //     const checked = e.target.parentElement;
    //     checked.classList.remove('active__item');
    //     checked.className = 'deactive__item';
    //     dList.appendChild(checked);
    //     console.log(checked);
    // } 
