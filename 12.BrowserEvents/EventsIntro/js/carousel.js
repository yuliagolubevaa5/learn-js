//Карусель

let mouse = {
    pressed: false,
    lastX: 0
}
let ul = null;

function mouseDown(e) {
    mouse.pressed = true;
    mouse.lastX = e.clientX;
}

function mouseUp(e) {
    if (!mouse.pressed) return;
    mouse.pressed = false;
    ul.style.transition = "all 0.5s";
    let inFrame = document.body.querySelector('#carousel .in-frame').getBoundingClientRect();
    let left = ul.getBoundingClientRect().x - inFrame.x;
    left = Math.round(left / 130) * 130;
    let maxLeft = document.body.querySelector('#carousel li:last-child');
    maxLeft = -(maxLeft.offsetLeft + maxLeft.offsetWidth - inFrame.width);
    if (left < maxLeft) left = maxLeft;
    if (left > 0) left = 0;
    ul.style.left = left + 'px';
}

function mouseMove(e) {
    if (!mouse.pressed) return;
    if (e.buttons == 0) return;
    let inFrame = document.body.querySelector('#carousel .in-frame').getBoundingClientRect();
    let left = ul.getBoundingClientRect().x - inFrame.x;
    ul.style.left = left + e.clientX - mouse.lastX + 'px';
    console.log(e);
    mouse.lastX = e.clientX;
}

function move(direction) {
    let inFrame = document.body.querySelector('#carousel .in-frame').getBoundingClientRect();
    let left = ul.getBoundingClientRect().x - inFrame.x;
    let maxLeft = document.body.querySelector('#carousel li:last-child');
    maxLeft = -(maxLeft.offsetLeft + maxLeft.offsetWidth - inFrame.width);
    switch (direction) {
        case 'left':
            left = left - inFrame.width;
            ul.style.left = left + 'px';
            if (left < maxLeft) {
                ul.style.left = maxLeft  + 'px';
                setTimeout(() => {
                    ul.style.left = maxLeft + 'px'
                }, 400)
            }
            break;
        case 'right':
            left = left + inFrame.width;
            ul.style.left = left + 'px';
            if (left > 0) {
                ul.style.left = 0 + 'px';
                setTimeout(() => {
                    ul.style.left = 0 + 'px'
                }, 400)
            }
            break;
    }
};

// отметить картинки для удобства разработки
// этот код может быть удалён по вашему усмотрению
let i = 1;
for (let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

carousel.onmousedown = mouseDown;
carousel.onmouseup = mouseUp;
carousel.onmouseout = mouseUp;
carousel.onmousemove = mouseMove;
ul = document.body.querySelector('#carousel ul');
