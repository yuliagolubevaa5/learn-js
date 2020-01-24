//Отсортировать по возрасту

function sortByAge(users) {
    users.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = {
    name: "Вася",
    age: 25
};
let petya = {
    name: "Петя",
    age: 30
};
let masha = {
    name: "Маша",
    age: 28
};

let users = [vasya, petya, masha];

sortByAge(users);

//Трансформировать в массив имён

let names = users.map(user => user.name);

alert(names);
