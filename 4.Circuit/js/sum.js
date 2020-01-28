//Сумма с помощью замыканий 

function sum(a) {
    return function (b) {
        return a + b;
    };
}

alert('Сумма с помощью замыканий: ' + sum(1)(2));
alert('Сумма с помощью замыканий: ' + sum(5)(-1))
