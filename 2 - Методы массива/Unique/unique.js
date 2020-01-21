//Оставить уникальные элементы массива

function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

let words = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ":-O"];
alert(unique(words));
