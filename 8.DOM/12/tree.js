//Создайте дерево из объекта

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    "Рыбы2": {},

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function createTree(container, data) {
    let ul = document.createElement('ul');
    container.append(ul);
    
    for(let key in data){
        let li = document.createElement('li');
        li.textContent = key;
        
        ul.append(li);
        
        if(Object.keys(data[key]).length){
            createTree(li,data[key]);
        }
    }
}

createTree(document.getElementById('tree'), data);
