$(function () {
    $(window).resize(function (e) {
        $("#resize-text").text("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
    });
    
    $(window).scroll(function(e){
        $("#scroll-text").text("Position Y: " + window.scrollY);
    });
    
    $("button").click(function(e){
        $(this).text("Pushed!");
    });
});
