let slider = document.querySelector('.slider');
let thumb = document.querySelector('.thumb');
thumb.addEventListener('mousedown', function (e) {
    let shiftX = e.clientX - this.getBoundingClientRect().left;
    this.style.top = this.getBoundingClientRect().top + 'px';
    this.style.position = 'absolute';
    var t = this;
    let c = slider.getBoundingClientRect();
    moveAt(e.pageX);

    function moveAt(pageX) {
        let n = (pageX < c.left) ? c.left : (pageX > c.right) ? c.right : pageX;
        t.style.left = n - shiftX + 'px';
    }

    function onMouseMove(e) {
        moveAt(e.pageX);
    }
    document.addEventListener('mousemove', onMouseMove);
    document.documentElement.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        t.onmouseup = null;
    };
});
