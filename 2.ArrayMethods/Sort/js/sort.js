//Сортировка в порядке по убыванию

let arr = [5, 2, 1, -10, 8];
arr.sort(function(a, b){
    return b-a;
})

alert(arr);