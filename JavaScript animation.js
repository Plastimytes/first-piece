const element = document.getElementById('myElement');

function moveElement() {
    let left = parseInt(window.getComputedStyle(element).left);
    left += 10;
    element.style.left = left + 'px';
    if (left < 400) {
        setTimeout(moveElement, 10);
    }
}

moveElement();
