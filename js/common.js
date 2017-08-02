
// $(function() {
//     var sl = new DropDown( $('#block-link-social-network') );
//     $(document).click(function() {
//         $('.wrapper-link-social-network').removeClass('active');
//     });
// });

function initDropDownGos() {
    $('.wrapper-gos-site').click(function () {
        $(this).toggleClass('active');
    });

    $(document).click( function(event){
        if( $(event.target).closest(".wrapper-gos-site.active").length )
            return;
        $(".wrapper-gos-site.active").closest('.block-gos-site').find('.active').removeClass('active');
        event.stopPropagation();
    });
}

function initDropDownLang() {
    $('.block-dropdown_lang').click(function () {
        $(this).toggleClass('active');
    });

    $(document).click( function(event){
        if( $(event.target).closest(".block-dropdown_lang.active").length )
            return;
        $(".block-dropdown_lang.active").closest('.wrapper-second-header_lang').find('.active').removeClass('active');
        event.stopPropagation();
    });
}

function initDropDownSoc() {
    $('.wrapper-link-social-network').click(function () {
        $(this).toggleClass('active');
    });

    $(document).click( function(event){
        if( $(event.target).closest(".wrapper-link-social-network.active").length )
            return;
        $(".wrapper-link-social-network.active").closest('.block-second-header-sm').find('.active').removeClass('active');
        event.stopPropagation();
    });
}

function initMasonry(){
    $('.map-site-content_list').masonry({
        // options
        itemSelector: '.map-site-content_list-item'
    });
}

function initClosePopup() {
    $('.btn-close-c').click(function () {
        $.fancybox.close();
    })
}

function initSliderHeader() {
    var mySwiper = new Swiper('.block-swiper-container-header', {
        speed: 400,
        spaceBetween: 100,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        virtualTranslate: false,
        touchReleaseOnEdges: true
    });
}

function initSliderMobNews() {
    var mySwiper = new Swiper('.block-wrapper-sticky-mobile_swiper', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
    });
}

function initTabsHeader() {
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
}

function initTabsSoc() {
    $('ul.tabs-s li').click(function(){
        var tab_id = $(this).attr('data-tabs');

        $('ul.tabs-s li').removeClass('current-s');
        $('.tab-content-s').removeClass('current-s');

        $(this).addClass('current-s');
        $("#"+tab_id).addClass('current-s');
    })
}

function initSliderHeaderNews() {
    $('.swiper-wrapper-news').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        vertical: true,
        adaptiveHeight: true,
        dots: true
    });
}

function initSliderAnchor() {
    $('.swiper-anchor-slider').slick();

    var nextAnchor = $('.swiper-anchor-slider > .slick-next');
    var prevAnchor = $('.swiper-anchor-slider > .slick-prev');

    $(window).scroll(function(event){
        var scrollTop = $(this).scrollTop();
        var scrollHeader = $('.container-wrapper-second-header').height();

        if($('.container-anchor-slider').hasClass('active')){
            if( scrollTop >= scrollHeader){
                $('.container-wrapper-header').css({
                    "margin-top": "-100%",
                });
                $('.container-anchor-slider').css({
                    "margin-top": "0%",
                });
            } else {
                $('.container-anchor-slider').css({
                    "margin-top": "-100%",
                });
                $('.container-wrapper-header').css({
                    "margin-top": "0%"
                })
            }
        }
    });

    $(nextAnchor).click(function () {
        setTimeout(function () {
            var elementClick = $('.swiper-anchor-slider').find('.slick-active').find('.anchor-slider').attr('href');
            var destination = $(elementClick).offset().top - 100;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        },200)
    });

    $(prevAnchor).click(function () {
        setTimeout(function () {
            var elementClick = $('.swiper-anchor-slider').find('.slick-active').find('.anchor-slider').attr('href');
            var destination = $(elementClick).offset().top - 100;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        },200)
    })

}

function initSliderDopCondition() {
    var swiper = new Swiper('.wrapper-admission-campaign_slider-swiper', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints:{
            930:{
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    });
}

function initSliderText() {
    var swiper = new Swiper('.content-row-wrapper_text-slider', {
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
}

function initStickyVideo() {
    $('.sticky').Stickyfill();
}

function initSearch() {
    $('.js-search-open').on('click', function() {
        $('.js-search-site').fadeIn(250);
        $('body').addClass('modal-open');
        $('.js-form > .input').focus();
    });
    $('.js-search-close').on('click', function() {
        $('.js-search-site').fadeOut(250);
        $('body').removeClass('modal-open');
        resetForm($('.js-search-site').find('.js-form'));
    });
}

function initSearchMapSite() {
    $('.js-search-open-map-site').on('click', function() {
        $('.js-map-site').fadeIn(250);
        $('body').addClass('modal-open');
        // $('.js_site-main_search > .input-border-bottom').focus();
        initMasonry({
            initLayout: true
        });

    });
    $('.js-search-close-map').on('click', function() {
        $('.js-map-site').fadeOut(250);
        $('body').removeClass('modal-open');
        resetForm($('.js-map-site').find('.js-form'));
    });
}

function initScrollHeader() {
    var lastScrollTop = 0;
    var headerHeight = $('.container-wrapper-second-header').height();
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){

            if ($(window).width() > 768) {
                $('.block-header-menu').css({
                    "margin-top":"50px"
                });
            } else if($(window).width() < 1280){
                $('.block-header-logo').css({
                    "display":"none"
                })
            } else {
                $('.block-header-menu').css("margin-top", "20px");
            }
            $('.container-wrapper-header').css({
                "background":"-moz-linear-gradient(top, rgba(21,46,98,0.9) 0%, rgba(18,51,119,0.4) 50%, rgba(18,51,119,0) 100%)",
                "background":"-webkit-linear-gradient(top, rgba(21,46,98,0.9) 0%,rgba(18,51,119,0.4) 50%,rgba(18,51,119,0) 100%)",
                "background":"linear-gradient(to bottom, rgba(21,46,98,0.9) 0%,rgba(18,51,119,0.4) 50%,rgba(18,51,119,0) 100%)",
                "filter":"progid:DXImageTransform.Microsoft.gradient( startColorstr='#e6152e62', endColorstr='#00123377',GradientType=0 )"
            });
            $('.block-header-logo').css({
                "width": "78px"
            });
            $('.swiper-pagination.index-pag').css({
                "display":"none"
            })
        } else {
            if ($(window).width() > 768) {
                $('.block-header-menu').css("margin-top", "90px");
            } else {
                $('.block-header-menu').css("margin-top", "20px");
            }
            $('.container-wrapper-header').css({
                "background":"initial",
                "filter":"none"
            });
            $('.block-header-logo').css({
                "width": "120px"
            });
            $('.swiper-pagination.index-pag').css({
                "display":"block"
            });

        }

        if($(window).width() < 1280){
            if (st > lastScrollTop){
                $('.block-header-logo').css({
                    "opacity":"0"
                })
            } else {
                $('.block-header-logo').css({
                    "opacity":"1"
                })
            }
        }

        if (st > headerHeight){
            if ($(window).width() > 768) {
                $('.block-header-menu').css({
                    "margin-top": "15px"
                });
            } else {
                $('.block-header-menu').css("margin-top", "0");
            }
            $('.swiper-pagination.index-pag').css({
                "display":"none"
            });
            $('.container-wrapper-header').css({
                "background":"#000000",
                "height": "50px"
            });
        }
    });
}

function initSimpleParallax() {
    var scrolled = $(window).scrollTop() + 1;
    $('.block-wrapper-sticky').css({"transform": "translate3d(0px, " +-(scrolled * 0.9)+"px, 0px)"});
}

function initDropShow () {
    $('.js-drop-open-mobile > p').each(function() {
        $(this).on('click', function() {
            // $(this).find('.down').toggleClass('up');
            if($(this).closest('.js-drop-open-mobile').hasClass('upOpen')){
                $(this).closest('.js-drop-open-mobile').removeClass('upOpen');
                $(this).closest('.js-drop-open-mobile').find('.mobile-menu_dop').slideUp(300);
                $(this).find('.icon-arrow').removeClass('up-arrow');
            }else{
                $(this).closest('.js-drop-open-mobile').addClass('upOpen');
                $(this).closest('.js-drop-open-mobile').find('.mobile-menu_dop').slideDown(300);
                $(this).find('.icon-arrow').addClass('up-arrow');
            }
        })
    })
}

function initDropQShow () {
    $('.js-drop-open').each(function() {
        $(this).on('click', function() {
            $(this).find('.wrapper-accordion-question').slideToggle(300);
        })
    })
}

function initDropQShowNav () {
    $('.js-drop-open').each(function() {
        $(this).on('click', function() {
            if($(this).hasClass('upOpen')){
                $(this).removeClass('upOpen');
                $(this).find('.wrapper-accordion-nav').slideUp(300);
                $(this).find('.icon-arrow').removeClass('up-arrow');
            }else{
                $(this).addClass('upOpen');
                $(this).find('.wrapper-accordion-nav').slideDown(300);
                $(this).find('.icon-arrow').addClass('up-arrow');
            }
        })
    })
}

function initDropStaff() {
    $('.js-drop-open-table').each(function() {
        $(this).on('click', function() {
            if($(this).hasClass('upOpen')){
                $(this).removeClass('upOpen');
                $(this).closest('.wrapper-teaching-staff_table-row').find('.box-info-teaching-staff').slideUp(300);
                $(this).closest('.wrapper-teaching-staff_table-row').find('.wrapper-teaching-staff_table-row_icon').removeClass('up-arrow');
            }else{
                $(this).addClass('upOpen');
                $(this).closest('.wrapper-teaching-staff_table-row').find('.box-info-teaching-staff').slideDown(300);
                $(this).closest('.wrapper-teaching-staff_table-row').find('.wrapper-teaching-staff_table-row_icon').addClass('up-arrow');
            }
        })
    })
}

function initDropSpecialties() {
    $('.js-drop-open-secialties').each(function() {
        $(this).on('click', function() {
            if($(this).hasClass('upOpen')){
                $(this).removeClass('upOpen');
                $(this).find('.content-accordion').slideUp(300);
                $(this).find('p > span').text('+').css('right', '5px');
            }else{
                $(this).addClass('upOpen');
                $(this).find('.content-accordion').slideDown(300);
                $(this).find('p > span').text('–').css('right', '7px');
            }
        })
    })
}

function initMenu() {
    var clearSetTimeout;
    var menuDelay = 200;
    $('.js-menu-category .menu_categories li a').on( 'mouseover', function(e){
        var __self = this;
        var _e = e;
        // $('body').addClass('modal-open');
        clearSetTimeout = setTimeout(function() {
            var fade = 0;
            if (!globalSetting.menuFirstOpen) { fade = 300; globalSetting.menuFirstOpen = true; menuDelay = 0; }
            else fade = 0;
            if ($(__self).data('index') == undefined ) _e.preventDefault();
            else {
                //находим нужную вкладку
                var thisTab = $('.js-menu-category-content').find("[data-index='" + $(__self).data('index') + "']")
                var thisTabActivIndex = $('.js-menu-category').find('.menu_categories').find('.active').data('index');
                var thisTabActiv= $('.js-menu-category-content').find("[data-index='" + thisTabActivIndex + "']")

                //добавление активного пункта меню
                $('.js-menu-category').find('.menu_categories').children().find('a').removeClass('active').addClass('no-active');
                $(__self).addClass('active').removeClass('no-active');

                //показываем ее и скрываем остальные
                if (thisTabActivIndex == undefined) {
                    setTimeout(function () {
                        $('.select2-results__options').mCustomScrollbar();
                    }, 0);
                    thisTab.toggle().addClass('rver');
                }

                thisTabActiv.slideUp({
                    duration: 0,
                    complete: function(){
                        thisTab.slideToggle(0).removeClass('rver');
                    }
                });

                // thisTab.slideToggle(fade).siblings().slideToggle(0);
                thisTab.find('.js-menu-hover').children().first().addClass('active').siblings().removeClass('active');
                thisTab.find('.wrapp_content').css("display","none");
                thisTab.find('.wrapp_content').first().css("display","inline-block");

            }
        }, menuDelay);

    });

    $('.js-menu-category .menu_categories li a.menu-no').on('mouseover', function (e) {
        clearTimeout(clearSetTimeout);
        menuDelay = 200;
        $('.js-menu-category-content-item').fadeOut(0);
        $('.js-menu-category').find('.menu_categories').children().find('a').removeClass('active').removeClass('no-active');
    });

    $('.js-menu-category .menu_categories li a').on( 'mouseleave', function(e){
        clearTimeout(clearSetTimeout);
        globalSetting.menuFirstOpen = false;
    });

    $('.js-menu-category').on( 'mouseleave', function(e){
        clearTimeout(clearSetTimeout);
        // $('body').removeClass('modal-open');
        menuDelay = 200;
        $('.js-menu-category-content-item').fadeOut(0);
        $('.js-menu-category').find('.menu_categories').children().find('a').removeClass('active').removeClass('no-active');

    });

    //ховеры на табы слева
    $('.js-left-menu-hover').on('mouseenter', function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.js-menu-category-content-item').find('.wrapp_content').css("display","none");
        $('.js-menu-category-content-item').find("[data-tab-content='" + $(this).data('tab') + "']").css("display","inline-block");
    });

    // ховеры на пункты меню
    $('.js-menu-item-hover .menu-center ul li a').on('mouseenter', function(){
        $('.js-menu-item-hover').find('.menu-center').find('ul').children().find('a').addClass('no-active');
        $(this).addClass('active').removeClass('no-active');
    })
    $('.js-menu-item-hover').on('mouseleave', function(){
        $('.js-menu-item-hover').find('.menu-center').find('ul').children().find('a').removeClass('no-active');
    })
}

function initSelect() {
    $(".select2").select2({ minimumResultsForSearch: -1 });

    $('.select2').on('select2:open', function (e) {
        $('.select2-results__options').mCustomScrollbar('destroy');
        setTimeout(function () {
            $('.select2-results__options').mCustomScrollbar();
        }, 0);
    });
}

function initAnchor() {
    $("a.anchor-touch").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 100;
        $('.active-anchor').removeClass();
        $(this).closest('li').addClass('active-anchor');
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
}

function scrollUp() {
    $('.container-scroll-top').click(function () {
        $('body,html').animate({scrollTop:0},800);
    });

    $(window).scroll(function(){
        if ( $(document).scrollTop() > 800 ) {
            $('.container-scroll-top').fadeIn('fast');
        } else {
            $('.container-scroll-top').fadeOut('fast');
        }
    });
}

function initCounter() {
    $('.number-counter').countUp();
}

function initValidForm() {
    var form_valid = $(".js-form");
    if (form_valid.length) {
        form_valid.each(function () {
            var form_this = $(this);
            $.validate({
                form: form_this,
                borderColorOnError: true,
                scrollToTopOnError: false,
                modules: 'html5',
            });
        });
    }
}

function initRevealator() {
    Revealator.effects_padding = '-400';
}

function initSetting() {
    globalSetting.menuFirstOpen = false;
    globalSetting.menuOtherDel1 = false;
}

var globalSetting = [];
initSetting();

$(window).scroll(function (e) {
    initSimpleParallax();
});

initClosePopup();
initSliderHeader();
initTabsHeader();
initSliderHeaderNews();
initStickyVideo();
initSearch();
initSearchMapSite();
initTabsSoc();
initScrollHeader();
initSimpleParallax();
initDropShow();
initSliderMobNews();
initSliderDopCondition();
initSliderText();
initMenu();
initDropQShow ();
initDropQShowNav ();
initDropStaff();
initSelect();
initAnchor();
initDropDownLang();
initDropDownGos();
initDropSpecialties();
initMasonry();
initRevealator();
scrollUp();
initCounter();
initValidForm();
initDropDownSoc();


if ($(window).width() > 1024) { initSliderAnchor(); }
$(window).on('resize', function() {
    if ($(window).width() > 1024) {
        initSliderAnchor();
    }
});


// Video width
$( document ).ready(function() {

    // Resive video
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

/** Reusable Functions **/
/********************************************************************/

function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width'),
            windowAspectRatio = windowHeight/windowWidth;

        if (videoAspectRatio > windowAspectRatio) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;
            $(this).css({'top' : -(videoHeight - windowHeight) / 2 + 'px', 'margin-left' : 0});
        } else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
        }

        $(this).width(videoWidth).height(videoHeight);

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');


    });
}