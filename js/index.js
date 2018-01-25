$(window).load(function(){
    var $container = $('.galleryContainer'),
        $body = $('body'),
        colW = 375,
        columns = null;

    $(function(){
        var shrinkHeader = 100;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if ( scroll >= shrinkHeader ) {
                $('.navbar-default').addClass('shrink');
            }
            else {
                $('.navbar-default').removeClass('shrink');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
    
    $container.isotope({
        // disable window resizing
        resizable: true,
        masonry: {
            columnWidth: colW
        }
    });

    $(window).smartresize(function(){
        // check if columns has changed
        var currentColumns = Math.floor( ( $body.width() -30 ) / colW );
        if ( currentColumns !== columns ) {
            // set new column count
            columns = currentColumns;
            // apply width to container manually, then trigger relayout
            $container.width( columns * colW )
                .isotope('reLayout');
        }

    }).smartresize(); // trigger resize to set container width
    $('.galleryFilter a').click(function(){
        $('.galleryFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({

            filter: selector,
        });
        return false;
    });
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});


$(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 600, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        scrollImg: true,
    });
});