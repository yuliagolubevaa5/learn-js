//Фильтрация с помощью функции

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

alert('Фильтрация с помощью функции на промежутке: ' + arr.filter(inBetween(3,6)));
alert('Фильтрация с помощью функции в массиве: ' + arr.filter(inArray([1, 2, 10])));