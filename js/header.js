$(function() {
    $('.toggle_btn').on('click', function() {
        $('.menu').slideToggle();
        $(this).toggleClass('open');
    });
});