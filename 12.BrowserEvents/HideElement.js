//Скрыть элемент по нажатию кнопки

function hide(){
    document.getElementById('text').style.display = 'none';
}

document.getElementById('hider').onclick = hide;

//Создайте кнопку, которая будет скрывать себя по нажатию

let hide_btn = document.getElementById('hiding_btn');

hide_btn.onclick = function() {
    hide_btn.style.display = 'none';
}