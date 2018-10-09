$(function () {
    var showMenu = 0;
    $(".nav-open").click(function () {
        $(".nav-collapse").addClass("show");
        $(".nav-menu,.sub-menu").css("display", "none");
    });
    $(".list-title").click(function () {
        if ($(window).width() <= 991) {
            $(this).parent().siblings().children(".nav-menu,.sub-menu").removeClass("show");
            $(this).parent().children(".nav-menu,.sub-menu").toggleClass("show");
        }
    });
    $(".nav-close").click(function () {
        if ($(window).width() <= 991) {
            $(".nav-collapse").removeClass("show");
        }
    });
});