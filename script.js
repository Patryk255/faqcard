'use strict';

const arrows = document.querySelectorAll('.arrow');

for (const arrow of arrows){
    arrow.addEventListener('click', function() {
        if (!arrow.classList.contains('arrowRotate')){
            arrows.forEach(arrow => {
                arrow.classList.remove('arrowRotate');
                arrow.parentElement.classList.remove('boldText');
                arrow.parentElement.querySelector('.answer').classList.add('hide');
            })
            arrow.classList.add('arrowRotate');
            arrow.parentElement.classList.add('boldText');
            arrow.parentElement.querySelector('.answer').classList.remove('hide');
        }else{
            arrow.classList.remove('arrowRotate');
            arrow.parentElement.classList.remove('boldText');
            arrow.parentElement.querySelector('.answer').classList.add('hide');
        }
    })
}