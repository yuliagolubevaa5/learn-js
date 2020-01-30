//Раскрывающееся дерево; Создайте дерево, которое по клику на заголовок скрывает-показывает потомков

let tree = document.getElementById('tree');

tree.addEventListener("click", function (e) {
    let elem = e.target.firstElementChild;
    
    if (elem.tagName !== 'UL' || elem == null) return;
    elem.hidden = !elem.hidden;
        
});