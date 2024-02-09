const $body = $('body');

const app = function ($) {

    //header

    const headerMenu = () => {

        const $trigger_menu_open = $('.header__menu_trigger');
        const $header__menu_block = $('.header__menu');
        const $header = $('.header');

        $trigger_menu_open.on('click', function () {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $header__menu_block.removeClass('open');
                $header.removeClass('open');
                $body.removeClass('modal__open');
            } else {
                $(this).addClass('open');
                $header__menu_block.addClass('open');
                $header.addClass('open');
                $body.addClass('modal__open');
            }
        });
    }

    const headerMenuItemHover = () => {

        const header__submenu_trigger = $('.header__submenu_trigger');

        header__submenu_trigger.on('mouseenter', function () {
            let window__width = $(window).width();
            if (window__width >= 1200) {
                header__submenu_trigger.parent().removeClass('open');
                $(this).parent().addClass('open');
            }
        });
        header__submenu_trigger.parent().on('mouseleave', function () {
            let window__width = $(window).width();
            if (window__width >= 1200) {
                header__submenu_trigger.parent().removeClass('open');
            }
        });
        header__submenu_trigger.on('click', function (e) {
            e.preventDefault();
            let window__width = $(window).width();
            if (window__width < 1200) {
                if ($(this).parent().hasClass('open')) {
                    header__submenu_trigger.parent().removeClass('open');
                } else {
                    header__submenu_trigger.parent().removeClass('open');
                    $(this).closest('.item-with-submenu').addClass('open');
                }
            }
        });
    }



    //forms

    const allForms = () => {

        $('.js-select').select2({
            minimumResultsForSearch: Infinity,
        });
    }

    //sliders

    const sliderInit = () => {

        const slider = new Swiper('.simple-slider', {
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    }

    return {
        init() {

            //header
            headerMenu();
            headerMenuItemHover();

            //forms
            allForms();

            //sliders
            sliderInit();
        }
    }
};

window.app = app;

jQuery(document).ready(function ($) {
    app($).init();
});