$("#mail_send").submit(function () {
    var str = $(this).serialize(); //mail=something@mail.ru
    $.ajax({
        type: "POST",
        url: "php/hello.php",
        data: str,
        success: function (html) {
            $('#content_p').html(html);
        }
    });
    return false;
});

function show() {
    $.ajax({
        url: "php/time.php",
        cache: false,
        success: function (html) {
            $('#content_p').html(html);
        }
    });
}
//        setInterval('show()', 1000);
