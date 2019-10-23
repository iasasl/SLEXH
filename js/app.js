'use strict';

const arrows = document.querySelectorAll('.arrow');
const menuPoints = document.querySelectorAll('.menu-point-link');
console.log(arrows);

menuPoints.forEach(function(item) {
    item.addEventListener('mousedown', function(e) {
        hideArrows();
        this.querySelector('.arrow').classList.add('active');
    });
});

function hideArrows() {
    arrows.forEach(function(item) {
        item.classList.remove('active');
    });
};

