$(function () {

    $("button").click(function (e) {
        $(this).text("Pushed!");
    });
    
    //Одновременная обработка
    /*    $(window).on("resize scroll", {user: "Some string"} function (e) {
            $("#resize-text").text("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
            $("#scroll-text").text("Position Y: " + window.scrollY);
            console.log(e.data.user);
        });
        $(window).off('resize');*/
    
    //Последовательная обработка
    $(window).on({
        
        resize: function () {
            $("#resize-text").text("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
        },

        scroll: function (e) {
            $("#scroll-text").text("Position Y: " + window.scrollY);
            console.log(e.data.user);
        }
    }, {
        user: "Test string"
    });
    
    $(window).trigger("resize");
    
    //Одиночный вызов
    /*$(window).one({
        
        resize: function () {
            $("#resize-text").text("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
        },

        scroll: function (e) {
            $("#scroll-text").text("Position Y: " + window.scrollY);
            console.log(e.data.user);
        }
    }, {
        user: "Test string"
    });*/
});
