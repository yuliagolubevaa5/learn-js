// Считаем потомков

for (let li of document.querySelectorAll('li')){
    let liName = li.firstChild.data.trim();
    let count = li.getElementsByTagName('li').length;
    
    alert(liName + ': ' + count);
}