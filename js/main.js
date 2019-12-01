//loder
$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

})




$(document).ready(function() {
    // Super Slides
    $('#slides').superslides({
        play: 5000,
        animation: 'slide',
        pagination: false
    });

    //navbar motion 

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });

    //typed
    var typed = new Typed('.sub', {
        strings: ['Web Developer.', 'Content Writer.', 'Web Designer.', ],
        typeSpeed: 80,
        loop: true,
        showCursor: false,
    });

    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    //javaScript
    var skillsTopOffset = $(".skillSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function() {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            // Easy Pie Chart
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: 'white',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
        //stats counter part
        var statsTopOffset = $(".statsSection").offset().top;
        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function() {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            })

            countUpFinished = true;

        }
    });

    //fancyBox
    $("[data-fancybox]").fancybox();

    //isotope animation for sort and filtering
    $('.Items').isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    //filtering
    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".Items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    //wow js

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();










});