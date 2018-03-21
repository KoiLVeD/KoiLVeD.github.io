let skrollr = require('skrollr');
//
// if( ($(window).innerWidth()) <= 1025) {
//     skrollr.init().destroy();
// } else {
//
// }
$(document).ready(function () {
    skrollr.init({
        smoothScrolling: false,
        render: function(data) {
            // document.querySelector(".whereami").innerHTML = data.curTop;
        }
    });
});
