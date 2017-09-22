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
    $('.page-o').masonry({
        // options
        itemSelector: '.map-site-content_list-item'
    });
}

function initMasonryPage(){
    $('.page-m').masonry({
        // options
        itemSelector: '.map-site-content_list-item',
        initLayout: true
    });
}

function initClosePopup() {
    $('.btn-close-c').click(function () {
        $.fancybox.close();
    })
}


function initSliderHeader() {
    var mySwiper = new Swiper('.block-swiper-container-header', {
        speed: 1000,
        spaceBetween: 100,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        virtualTranslate: false,
        touchReleaseOnEdges: false,
        simulateTouch: false
    });
}

function initSliderMobNews() {

    if ($(window).width() < 914) {
        var mySwiper = new Swiper('.block-wrapper-sticky-mobile_swiper', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
        });
    }

    $(window).on('resize', function() {
        if ($(window).width() < 914) {
            var mySwiper = new Swiper('.block-wrapper-sticky-mobile_swiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                spaceBetween: 30,
            });
        }
    });
}

function initTabsHeader() {
    $('ul.tabs li').click(function(){
        $('ul.tabs li').removeClass('current');
        $(this).addClass('current');
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
        slidesPerView: "auto",
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
}

function initStickyVideo() {
    $('.sticky').Stickyfill();
}

function initStickyPrint() {
    var heightStickyPrint = ($('.container-wrapper-second-header').height() + $('.content-row-wrapper').height()) / 4;

    $('.sticky-print').Stickyfill();
    $(window).scroll(function(){
        if ( $(document).scrollTop() > heightStickyPrint ) {
            $('.wrapper_row-social-print').css({
                "bottom":"0"
            })
        } else {
            $('.wrapper_row-social-print').css({
                "bottom":"-1000px"
            })
        }
    });
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
        setTimeout(function () {
            $('.page-o').css({
                "opacity":"1"
            })
        }, 500);
    });
    $('.js-search-close-map').on('click', function() {
        $('.js-map-site').fadeOut(250);
        $('.page-o').css({
            "opacity":"0"
        });
        $('body').removeClass('modal-open');
    });
    $('.mobile-menu_dop-link').on('click', function () {
        setTimeout(function () {
            $('.js-map-site').fadeOut(250);
            $('body').removeClass('modal-open');
        }, 800);
    });
}

function initScrollHeader() {
    var lastScrollTop = 0;
    var headerHeight = $('.container-wrapper-second-header').height() -60;
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
                });
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
                });
                $('.block-header-logo-mobile').css({
                    "opacity":"0"
                })
            } else {
                $('.block-header-logo').css({
                    "opacity":"1"
                });
                $('.block-header-logo-mobile').css({
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
                "background":"#08285e",
                "height": "50px"
            });
        }
    });
}

function initSimpleParallax() {
    var scrolled = $(window).scrollTop() + 1;
    $('.block-wrapper-sticky-mobile').css({"transform": "translate3d(0px, " +-(scrolled * 0.9)+"px, 0px)"});

    if ($(window).width() < 1180){
        var scrolled = $(window).scrollTop() + 1;
        $('.block-wrapper-sticky-mobile').css({"transform": "translate3d(0px, " +-(scrolled * 0)+"px, 0px)"});
    }

    $(window).on('resize', function() {
        if ($(window).width() < 1180) {
            var scrolled = $(window).scrollTop() + 1;
            $('.block-wrapper-sticky-mobile').css({"transform": "translate3d(0px, " +-(scrolled * 0)+"px, 0px)"});
        }
    });
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
                $(this).find('.btn-open-secialties > span').text('+').css('right', '5px');
            }else{
                $(this).addClass('upOpen');
                $(this).find('.content-accordion').slideDown(300);
                $(this).find('.btn-open-secialties > span').text('–').css('right', '7px');
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
    var closeSelect = $(".select2.select-popup").select2();
    $(".select2").select2();

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".w-p"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            closeSelect.select2("close");
        }
    });

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

        // var numberBtnSlider = $(this).attr('data-slider-number');
        // $('.swiper-anchor-slider').slick('slickGoTo', numberBtnSlider);

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

    $('.topAnchorLink').click(function () {
        $('body,html').animate({scrollTop:0},800);
    });

    $(window).scroll(function(){
        if ( $(document).scrollTop() > 1300 ) {
            $('.container-scroll-top').fadeIn('fast');
        } else {
            $('.container-scroll-top').fadeOut('fast');
        }
    });
}

function initCounter() {
    $('.number-counter').countUp();
}

function formResponse(form) {
    if(form.closest('.wrapper-popup').length){
        var cont = form.closest('.wrapper-popup'),
            resp = cont.next('.response');
        if(resp.length){
            cont.fadeOut("slow",function(){
                resp.fadeIn("slow");
            });
        }
    }
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
                onSuccess: function ($form) {
                    formResponse(form_this);
                }
            });
        });
    }
}

function initRevealator() {
    Revealator.effects_padding = '-400';
}

function initNoClass() {
    $('.revealator-zoomin').each(function() {
        $(this).addClass('no-anim');
    })
}

function initIncomingLink() {
    $('.incoming-link').mouseenter(function () {
        $(this).find('.incoming-link-txt_pod').fadeIn('100')
    })
}

function initFilter() {
    $('.wrapper-teaching-staff_table-title_name').click(function () {
        if($(this).find('.icon-filter').closest('.icon-filter').hasClass('up')){
            $(this).find('.icon-filter').closest('.icon-filter').removeClass('up');
            $(this).find('.icon-filter').closest('.icon-filter').addClass('down');
        } else {
            $(this).find('.icon-filter').closest('.icon-filter').removeClass('down');
            $(this).find('.icon-filter').closest('.icon-filter').addClass('up');
        }
    })
}

function initSmallMenu() {
    if ($('.small-menu-center').length) {
        $('.small-menu-center').closest('.menu_categories-content').addClass('small-width');
    }
}

function initSliderScroll() {
    $(window).scroll(function(){
        var $sections = $('.wrapper-date-content');
        $sections.each(function(i,el){
            var top  = $(el).offset().top-150;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('data-number-news');
            if( scroll > top && scroll < bottom){
                $('.swiper-anchor-slider').slick('slickGoTo', id);
            }
        })
    });
}

function initClosePopup() {
    $('.block-forgot-password a').click(function () {
        $.fancybox.close();
    });

    $('.block-registration a').click(function () {
        $.fancybox.close();
    })
}

function initDisabledSel() {

    var thisVal = $(this).val('');

    $('#select1').on('select2:select select2:unselect', function (evt) {
        if(thisVal==''){
            $('#select2 .select2').addClass('disabled-select')
        } else {
            $('#select2 .select2').removeClass('disabled-select')
        }
    });

    $('#select2').on('select2:select select2:unselect', function (evt) {
        if(thisVal==''){
            $('#select3 .select2').addClass('disabled-select')
        } else {
            $('#select3 .select2').removeClass('disabled-select')
        }
    });
}

function initDatePicer() {
    var startDate;
    var endDate;


    $(document.body).on('click', '.container-calendar', function(e) {
        $(e.currentTarget).find('.week-picker').datepicker('show');
    });

    var selectCurrentWeek = function() {
        window.setTimeout(function () {
            $('.week-picker').datepicker('widget').find('.ui-datepicker-current-day a').addClass('ui-state-active')
        }, 1);
    };

    $('.week-picker').datepicker({
        showOtherMonths: false,
        selectOtherMonths: false,
        dateFormat: "dd.mm.yy",
        onSelect: function(dateText, inst) {
            var date = $(this).datepicker('getDate');
            startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
            endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 6);
            var dateFormat = inst.settings.dateFormat || $.datepicker._defaults.dateFormat;
            $('span.startDate').text($.datepicker.formatDate( dateFormat, startDate, inst.settings ));
            $('span.endDate').text($.datepicker.formatDate( dateFormat, endDate, inst.settings ));

            $('input.startDate').val($.datepicker.formatDate( dateFormat, startDate, inst.settings ));
            $('input.endDate').val($.datepicker.formatDate( dateFormat, endDate, inst.settings ));

            selectCurrentWeek();
        },
        beforeShow: function() {
            selectCurrentWeek();
        },
        beforeShowDay: function(date) {
            var cssClass = '';
            if(date >= startDate && date <= endDate)
                cssClass = 'ui-datepicker-current-day';
            return [true, cssClass];
        },
        onChangeMonthYear: function(year, month, inst) {
            selectCurrentWeek();
        }
    }).datepicker('widget').addClass('ui-weekpicker');

    jQuery(function ($) {
        $.datepicker.setDefaults($.datepicker.regional['ru']);
    });

    $('.ui-weekpicker .ui-datepicker-calendar tr').mousemove(function() {
        $(this).find('td a').addClass('ui-state-hover');
    });
    $('.ui-weekpicker .ui-datepicker-calendar tr').mouseleave(function() {
        $(this).find('td a').removeClass('ui-state-hover');
    });

}

function initPlayer(){
    var players = $('.snipet-video');
    players.each(function(){
        var _ = $(this);
        _.on('click', function(e){
            _.addClass('played').find('iframe')[0].src += "?&autoplay=1";
            e.preventDefault();
        });
    });
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
initMasonryPage();
initRevealator();
scrollUp();
initCounter();
initValidForm();
initDropDownSoc();
initIncomingLink();
initStickyPrint();
initFilter();
initSmallMenu();
initSliderScroll();
initClosePopup();
initDisabledSel();
initDatePicer();
initPlayer();

if ($(window).width() > 1024) { initSliderAnchor(); }
$(window).on('resize', function() {
    if ($(window).width() > 1024) {
        initSliderAnchor();
    }
});

if ($(window).width() < 1024) { initNoClass(); }
$(window).on('resize', function() {
    if ($(window).width() < 1024) {
        initNoClass();
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

