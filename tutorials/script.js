$(document).ready(function () {
    // Handle code copying functionality
    $('.copy-icon').click(function () {
        const code = $(this).siblings('pre').text();
        navigator.clipboard.writeText(code).then(() => {
            $(this).removeClass('fa-copy').addClass('fa-check');
            setTimeout(() => {
                $(this).removeClass('fa-check').addClass('fa-copy');
            }, 1500);
        });
    });
});
