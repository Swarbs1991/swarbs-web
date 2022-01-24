(function() {
    var img = $("#plane"),
        width = img.get(0).width,
        screenWidth = $(window).width(),
        duration = 5000;

    function animatePlane() {
        img.css("left", -width).animate({
            "left": screenWidth
        }, duration, animatePlane);
    }

    animatePlane();
});