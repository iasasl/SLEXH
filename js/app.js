'use strict';

const arrows = document.querySelectorAll('.arrow');
const menuPoints = document.querySelectorAll('.menu-point-link');
const contentImages = document.querySelectorAll('.product-info');

menuPoints.forEach(function(item) {
    item.addEventListener('mousedown', function() {
        hideArrows();
        const activeArrow = this.querySelector('.arrow');
        activeArrow.classList.add('active');
        const activeArrowId = this.querySelector('.active').id;
        changeContent(activeArrowId, contentImages);
    });
});

function hideArrows() {
    arrows.forEach(function(item) {
        item.classList.remove('active');
    });
};

function changeContent(activeArrowId, contentImages) {
    contentImages.forEach(function(item) {
        item.hidden = true;
        if (item.firstElementChild.id === activeArrowId) {
            item.hidden = false;
            item.scrollTop = 0;
        }
    });
}