//Переведите текст вида border-left-width в borderLeftWidth

function camelize(str){
    return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

let str = prompt('Введите слово, разделённое - : ');
alert(camelize(str));