//Спрячьте сообщения с помощью делегирования

let container = document.getElementById('container');

container.addEventListener("click", function (event) {
    if (event.target.className != 'remove-button') return;

    let pane = event.target.parentElement;

    pane.remove();
});
