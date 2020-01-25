//Создайте календарь в виде таблицы

function createCalendar(elem, year, month) {
    let table = document.createElement('table');
    let firstMonthDay = new Date(year, month, 1).getDay() - 1;
    if (firstMonthDay === -1) firstMonthDay = 6;
    let quantityDays = 32 - new Date(year, month - 1, 32).getDate();
    let sumDays = firstMonthDay + quantityDays;
    let numberOfStrokes = sumDays > 35 ? 7 : 6;

    for (let i = 0; i < numberOfStrokes; i++) {
        let tr = document.createElement('tr');
        table.append(tr);
        if (!i) {
   ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].forEach(function (e) {
                let th = document.createElement('th');
                th.textContent = e;
                tr.append(th);
            })
        } else {
            for (let j = 0; j < 7; j++) {
                let td = document.createElement('td');
                tr.append(td);
            }
        }
    }

    for (let day = 1, week = 1; day <= quantityDays; day++) {

        table.rows[week].cells[firstMonthDay].textContent = day;
        if (++firstMonthDay === 7) {
            firstMonthDay = 0;
            week++;
        }
    }
    elem.append(table)
}

createCalendar(calendar, 2020, 12);
