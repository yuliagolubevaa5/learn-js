//Скопировать и отсортировать массив

function copySorted(array){
    return array.slice().sort();
}

let array = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(array);
alert(sorted);