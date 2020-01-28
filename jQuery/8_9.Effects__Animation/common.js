/*$('#div1').hide();
$('#div1').show();
$('#div1').fadeOut();
$('#div1').fadeIn();
$('#div1').fadeTo(1000, 0.5);
$('#div1').fadeToggle();

$('#div2').slideUp();
$('#div2').slideDown();
$('#div2').slideToggle(1000);*/

/*var animTime = 1000;

$('.someDiv').on('click', function(e) {
    
    var modal = $('#modalDiv');
    modal.css('top', (window.innerHeight - modal.height()) / 2);
    modal.css('left', (window.innerWidth - modal.width()) / 2);
    modal.css('background-color', $(e.target).css('background-color'));
    modal.fadeIn(animTime);
});

$('#modalDiv').on('click', function(e){
    $(this).fadeOut(animTime);
});*/

var animTime = 900;
var modal = $('#modalDiv');
var oldDiv = null;

$('.someDiv').on('click', function (e) {

    if (oldDiv) {
        oldDiv.css('opacity', 1);
    }

    var jthis = $(this);
    modal.css({
        'top': jthis.offset().top,
        'left': jthis.offset().left,
        'width': jthis.width(),
        'height': jthis.height(),
        'background-color': jthis.css('background-color'),
        'opacity': 1,
        'display': 'block'
    });

    jthis.css('opacity', 0);
    n = 0;

    modal
        .animate({
            'height': 400,
            'width': 400
        }, {
            duration: 2000,
            queue: false,
            specialEasing: {
                height: 'linear',
                width: 'swing'
            },
            complete: function(){
                console.log("Animation complete!");
            },
            step: function(){
                console.log(n++);
                if(n==200){
                    modal.stop();
                }
            }
        })
        .animate({
            'top': (window.innerHeight - 400) / 2,
            'left': (window.innerWidth - 400) / 2
        }, {
            duration: 1000,
            specialEasing: {
                height: 'linear',
                width: 'swing'
            }
        })


    oldDiv = jthis;
    /*modal.css('top', (window.innerHeight - modal.height()) / 2);
    modal.css('left', (window.innerWidth - modal.width()) / 2);
    modal.css('background-color', $(e.target).css('background-color'));
    modal.fadeIn(animTime);*/
});

$('#modalDiv').on('click', function (e) {
    $(this).fadeOut(animTime);
});
