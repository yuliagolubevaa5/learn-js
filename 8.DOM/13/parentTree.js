// Выведите список потомков в дереве

let ul = document.querySelectorAll('li');
ul.forEach(li => {
    let span = document.createElement('span');
    let length = li.querySelectorAll('li').length;
    if (length) {
        span.textContent = ' [' + length + ']';
        li.insertBefore(span, li.children[0]);
    }
})
