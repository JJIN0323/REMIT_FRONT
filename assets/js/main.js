(function ($) {

    var $window = $(window),
        $body = $('body');

    // BREAKPOINTS
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: [null, '480px']
    });


    // NAV

    // MOBILE TITLEBAR
    $(
            '<div id="titleBar">' +
            // 언어선택
            '<ul class="selectLanguage">' +
            $('.selectLanguage').html() +
            '</ul>' +

            // 로고, 메뉴아이콘
            '<a href="#navPanel" class="toggle"></a>' +
            '<span class="title">' + $('.logo').html() + '</span>' +
            '</div>'
        )
        .appendTo($body);

    // PANEL

    var userName = '홍길동';

    $(
            '<div id="navPanel">' +

            // 사용자 정보
            '<div class="userInfo">' +
            '<span class="userName">' + userName + ' 님' + '</span>' +
            '</div>' +

            // 메뉴
            '<nav>' +
            $('#nav').navList() +
            '</nav>' +

            // 로그아웃
            '<div class="buttonFrame">' +
            '<button class="yellowButton">' +
            '로그아웃' +
            '</button>' +
            '</div>' +

            '</div>'
        )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });
    
    // LANGUAGE SELECT OPTION

    $('.languageSelect').on('click', '.basic', function () {
        $(this).closest('.languageSelect').children('li:not(.basic)').toggle();
    });

    var allOptions = $('.languageSelect').children('li:not(.basic)');
    $('.languageSelect').on('click', 'li:not(.basic)', function () {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $('.languageSelect').children('.basic').html($(this).html());
        allOptions.toggle();
    });
    
    // DATEPICKER
    $(function() {
        $('#from, #to').datepicker();
    });
    
    $(function() {
        $('.lnaguageSelect').change(function(){
            $('.op').hide();
            $('.' + $(this).val()).show();
        });
    });
    
})(jQuery);

// MODAL

function openModal() {
    $('.modalOpen').click(function () {
        $('.modalWrapper').toggleClass('open');
        $('#pageWrapper').toggleClass('blurOverlay');
        return false;
    });
};
