//Поймайте переход по ссылке

let contents = document.getElementById('contents');

contents.addEventListener('click', function (e) {
    let target = event.target;
    if (target.closest('a').href) {
        let leave = confirm(`Leave for ${target.closest('a').href} ?`);
        if (!leave) event.preventDefault();
    }
});
