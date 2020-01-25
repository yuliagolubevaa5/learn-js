//Сортировка таблицы

let table = document.querySelector('#table');
let lengthRows = table.rows.length;
let names = [];

for (let i = 0; i < lengthRows; i++){
    names.push(table.rows[i].cells[0].innerHTML);
}

names.sort();

let tableCopy = table.cloneNode(true);

for (let i = 0; i < names.length; i++){
    for(let j = 1; j < tableCopy.rows.length; j++){
        if (names[i] === tableCopy.rows[j].cells[0].innerHTML){
            table.rows[i + 1].replaceWith(tableCopy.rows[j]);
            break;
        }
    }
}