/* Unity Chain js */
/* add active class with nav */
jQuery(document).ready(function () {
    jQuery(document).on("scroll", onScroll);
    
    /*smoothscroll*/
    jQuery('a.uc-nav-link[href^="#"]').on('click', function (e) {
        e.preventDefault();
        jQuery(document).off("scroll");
        
        jQuery('a.uc-nav-link').each(function () {
            jQuery(this).removeClass('active');
        })
        jQuery(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        jQuerytarget = jQuery(target);
        jQuery('html, body').stop().animate({
            'scrollTop': jQuerytarget.offset().top + 10
        }, 1200, 'swing', function () {
            window.location.hash = target;
            jQuery(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = jQuery(document).scrollTop();
    jQuery('.navbar-nav a.uc-nav-link').each(function () {
        var currLink = jQuery(this);
        var refElement = jQuery(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            jQuery('.navbar-nav li a.uc-nav-link').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
/* for make active nav after refresh the page */
jQuery(document).ready(function() {
    var loc = window.location.href;
    if (/./.test(loc)) {
        jQuery('.home .nav-link a').addClass('active');
    }
    if (/#top/.test(loc)) {
        jQuery('.home .nav-link a').addClass('active');
    }
    if (/#vision/.test(loc)) {
        jQuery('.vision .nav-link a').addClass('active');
        jQuery('.home .nav-link a').removeClass('active');
        jQuery('#header').addClass('fixed-header');
        jQuery('#header').addClass('fixed-shadow');
        jQuery('#main').addClass('main-scrolled');
    }
    if (/#realizations/.test(loc)) {
        jQuery('.realizations .nav-link a').addClass('active');
        jQuery('.home .nav-link a').removeClass('active');
        jQuery('#header').addClass('fixed-header');
        jQuery('#header').addClass('fixed-shadow');
        jQuery('#main').addClass('main-scrolled');
    }
    if (/#timeline/.test(loc)) {
        jQuery('.timeline').addClass('active');
        jQuery('.home .nav-link a').removeClass('active');
        jQuery('#header').addClass('fixed-header');
        jQuery('#header').addClass('fixed-shadow');
        jQuery('#main').addClass('main-scrolled');
    }
    if (/#our-team/.test(loc)) {
        jQuery('.our-team .nav-link a').addClass('active');
        jQuery('.home .nav-link a').removeClass('active');
        jQuery('#header').addClass('fixed-header');
        jQuery('#header').addClass('fixed-shadow');
        jQuery('#main').addClass('main-scrolled');
    }
    if (/#contact/.test(loc)) {
        jQuery('.contact .nav-link a').addClass('active');
        jQuery('.home .nav-link a').removeClass('active');
        jQuery('#header').addClass('fixed-header');
        jQuery('#header').addClass('fixed-shadow');
        jQuery('#main').addClass('main-scrolled');
    }
});
/* mobile menu responsive */
jQuery(document).ready(function() {
    if (jQuery(window).width() < 992) {
        jQuery("html").addClass('responsive');
        /* Trigger click on nav toggle button on click the link */
        jQuery(".uc-nav-link").on("click", function() {
            jQuery('.navbar-toggler').trigger("click");
        });
    } else {
        jQuery("html").removeClass('responsive');
    }
    if (jQuery("html").hasClass('responsive')) {
        jQuery(".top-nav-btns, .top-nav-outline").removeClass('btn');
        jQuery(".top-nav-btns").removeClass('btn-gradient');
        jQuery(".top-nav-btns").removeClass('btn-primary');
        jQuery(".top-nav-outline").removeClass('btn-outline-primary');
        jQuery(".top-nav-outline").removeClass('btn-gradient-outline');
        jQuery(".top-nav-btns, .top-nav-outline").removeClass('tt-c');
        jQuery(".nav-link").addClass('uc-nav');
    } else {
        jQuery(".top-nav-btns, .top-nav-outline").addClass('btn');
        jQuery(".top-nav-btns").addClass('btn-gradient');
        jQuery(".top-nav-btns").addClass('btn-primary');
        jQuery(".top-nav-outline").addClass('btn-outline-primary');
        jQuery(".top-nav-outline").addClass('btn-gradient-outline');
        jQuery(".top-nav-btns, .top-nav-outline").addClass('tt-c');
        jQuery(".nav-link").removeClass('uc-nav');
    }
});
/* navbar after scroll change bg color */
jQuery(document).ready(function() {
    var amountScrolled = 100;
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > amountScrolled) {
            jQuery('#header').addClass('fixed-header');
            jQuery('#header').addClass('fixed-shadow');
            jQuery('#main').addClass('main-scrolled');
        } else {
            jQuery('#header').removeClass('fixed-header');
            jQuery('#header').removeClass('fixed-shadow');
            jQuery('#main').removeClass('main-scrolled');
        }
    });
    jQuery(".navbar-toggler").on("click", function() {
        jQuery('.navbar-toggler-icon').toggleClass('open');
    });
});
/*  create the back to top button */
jQuery(document).ready(function() {
    jQuery('body').prepend('<a href="javascript:void(0)" class="uc-back-to-top"></a>');
    var amountScrolled = 500;
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > amountScrolled) {
            jQuery('a.uc-back-to-top').fadeIn('slow');
        } else {
            jQuery('a.uc-back-to-top').fadeOut('slow');
        }
    });
    jQuery('a.uc-back-to-top').click(function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
});