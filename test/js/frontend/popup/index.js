require("jquery-mousewheel");
require('malihu-custom-scrollbar-plugin');

let magnificPopup = require('magnific-popup');

$(document).ready(function() {
    $(document).on('click', '.js-popup', function(e) {

        $(this).magnificPopup({
            fixedContentPos: true,
            preloader: false,
            mainClass: 'custom-mfp',
            showCloseBtn: false,
            removalDelay: 450,
            callbacks: {
                open: function() {
                    $('.js-custom-scroll').mCustomScrollbar();
                },
                beforeClose: function() {

                }
            }
        }).magnificPopup('open');

        let $mfp = $.magnificPopup.instance;

        $('.b-popup__close').on('click', function(e) {
            $mfp.close();
        });

    });
});
