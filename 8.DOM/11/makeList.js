//Создайте список

let ul = document.body.querySelector('ul');

while (true) {
    let textLi = prompt('Введите значение пункта: ', '');

    if(textLi == '' || textLi == null){
        break;
    }
    let li = document.createElement('li');
    li.insertAdjacentText('beforeend', textLi);
    ul.append(li);
}
