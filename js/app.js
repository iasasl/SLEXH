'use strict';

const arrows = document.querySelectorAll('.arrow');
const menuPoints = document.querySelectorAll('.menu-point-link');
const contentImages = document.querySelectorAll('.product-info')

menuPoints.forEach(function(item) {
    item.addEventListener('mousedown', function() {
        hideArrows();
        const activeArrow = this.querySelector('.arrow');
        activeArrow.classList.add('active');
    });
    item.addEventListener('mouseup', function(){
        hideContent();
        const activeArrowId = this.querySelector('.active').id;
        findContent(activeArrowId, contentImages);
    });
});

function hideArrows() {
    arrows.forEach(function(item) {
        item.classList.remove('active');
    });
};

function hideContent() {
    contentImages.forEach(item => item.hidden = true);
}

function findContent(activeArrowId, contentImages) {
    contentImages.forEach(function(item) {
        if (item.firstElementChild.id === activeArrowId) {
            item.hidden = false;
        }
    });
}