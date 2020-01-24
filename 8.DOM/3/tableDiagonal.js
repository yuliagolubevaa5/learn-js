//Выделите ячейки по диагонали

let table = document.body.firstElementChild;

for(let i = 0; i < table.rows.length; i++){
    let tableRow = table.rows[i];
    tableRow.cells[i].style.backgroundColor = 'red';
}