$('<img>', {
        src: 'img/jquery.jpg',
        alt: 'jQuery course logo',
        title: 'Основы jQuery',
        click: function (e) {
            $(this).toggleClass("selectedImg");
        },
        /*    on: {
                click: function(e) {
                    $(this).toggleClass("selectedImg");
                }
            }*/
    })
    .css({
        'padding': '10px',
        'border': '1px solid black'
    })
    .appendTo('body');
