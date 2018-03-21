import './slider'
import './animation'
$(document).ready(function () {
    $('.js-submit').on('click', function (e) {
        e.preventDefault()
        var test = $('form').serialize();
        console.log(test);

    })
})