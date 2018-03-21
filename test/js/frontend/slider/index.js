import slick from 'slick-carousel';


let paramsHomeSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1001,
            settings: {
                fade: false,
                centerMode: true,
                infinite: false,
                centerPadding: '4.8%'
            }
        },
        {
            breakpoint: 480,
            settings: {
                fade: false,
                centerMode: true,
                infinite: false,
                centerPadding: '16px'
            }
        }
    ]
};
let paramsFilterSlider = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    swipeToSlide: true,
    variableWidth: true
};

let homeSlider = $('.js-home-slider');
let topFilterSlider = $('.js-top-slider-filter');

homeSlider.slick(paramsHomeSlider);
topFilterSlider.slick(paramsFilterSlider);
