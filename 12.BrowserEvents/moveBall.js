// Передвиньте мяч по полю

let field = document.getElementById('field');
let ball = document.getElementById('ball');

field.onclick = function(e){
    let fieldCoord = field.getBoundingClientRect();
    
    let dX = fieldCoord.x + ball.offsetWidth / 2 + field.clientLeft,
        dY = fieldCoord.y + ball.offsetHeight / 2 + field.clientTop,
        maxX = field.clientWidth - ball.offsetWidth,
        maxY = field.clientHeight - ball.offsetHeight;
    
    ball.style.left = Math.round(e.clientX - dX, 0, maxX) + 'px';
    ball.style.top = Math.round(e.clientY - dY, 0, maxY) + 'px';   
}