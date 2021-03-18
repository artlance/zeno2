jQuery(document).ready(function ($) {

    //ready

    //nojs
    $('body').removeClass('no-js');

    //------------------------------------------------------------------------//

    //fakelink
    $(document).on("click", ".button-sign-up", function (event) {
        event.preventDefault();
        $("body").toggleClass("sign-up-open");
    });

    //------------------------------------------------------------------------//

    $(document).on("click", ".navigation-toggle", function (event) {
        event.preventDefault();
        $("body").toggleClass("navigation-open");
    });

    //------------------------------------------------------------------------//

    //slider background
    $('.hero-old-background-slider').slick({
        dots: false,
        arrows: false,
        draggable: true,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 800,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.hero-old-background-slide',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.hero-old-stations-slider',
        fade: true
    });

    //slider hero
    $('.hero-old-stations-slider').slick({
        dots: true,
        arrows: false,
        draggable: true,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 600,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.hero-old-stations-slide',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.hero-old-background-slider',
        //fade: true
    });

    //------------------------------------------------------------------------//

    //play button
    $('.hero-old-stations-list .station-play').on('click', function (event) {
        event.preventDefault();
        var thisParents = $(this).parents('.hero-old-station');
        thisParents.siblings('.hero-old-station').removeClass('hero-old-station-active');
        thisParents.addClass('hero-old-station-active');
        var thisIndex = thisParents.index();
        $('.hero-old-background-slider').slick('slickGoTo', thisIndex);
    });

    //------------------------------------------------------------------------//

    //drop box
    activePop = null;
    dropClass = $('.drop');
    function closeInactivePop() {
        dropClass.each(function (i) {
            if ($(this).hasClass('active') && i != activePop) {
                $(this).removeClass('active');
            }
        });
        return false;
    }
    dropClass.on('mouseover', function (event) {
        activePop = dropClass.index(this);
    });
    dropClass.on('mouseout', function (event) {
        activePop = null;
    });
    $(document.body).on('click', function (event) {
        closeInactivePop();
    });
    $('.drop-toggle').on('click', function (event) {
        $(this).parent(dropClass).toggleClass('active');
    });

    //------------------------------------------------------------------------//

    //play toggle
    $('.station-play').on('click', function (event) {
        event.preventDefault();
        var thisElement = $(this),
            playerPause = $('.player-control-pause');
        if (thisElement.hasClass('active')) {
            thisElement.removeClass('active');
            playerPause.removeClass('active');
        } else {
            $('.station-play').removeClass('active');
            thisElement.addClass('active');
            $('body').addClass('player-active');
            playerPause.addClass('active');
        }
    });
    var thisHeroRadio;
    $('.player-control-pause').on('click', function (event) {
        event.preventDefault();
        var thisElement = $(this);
        if ($('.station-play.active').length) {
            thisHeroRadio = $('.station-play.active');
        }
        if (thisElement.hasClass('active')) {
            thisElement.removeClass('active');
            thisHeroRadio.removeClass('active');
        } else {
            thisElement.addClass('active');
            thisHeroRadio.addClass('active');
        }
    });


}); //document ready
