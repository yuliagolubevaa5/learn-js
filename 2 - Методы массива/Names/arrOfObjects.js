//Трансформировать в объекты

let roma = {
    name: "Рома",
    surname: "Пупкин",
    id: 1,
};

let ilya = {
    name: "Илья",
    surname: "Иванов",
    id: 2,
};

let katya = {
    name: "Катя",
    surname: "Петрова",
    id: 3,
};

let usersObjects = [roma, ilya, katya];

let usersMapped = usersObjects.map(userObject => ({
    fullName: `${userObject.name} ${userObject.surname}`,
    id: userObject.id,
}));

alert(usersMapped[0].id);
alert(usersMapped[0].fullName);
