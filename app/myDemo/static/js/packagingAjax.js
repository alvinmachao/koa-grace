(function ($) {
    //登录时候的请求用ajax
    window.ajax = $.ajax;
    //接口的请求用$.ajax
    $.ajax = function (obj) {
        ajax({
            url: '/api/checkSession',
            dataType: "json",
            success: function (data) {
                console.log(data);
                if (data.code == 0) {
                    ajax(obj);
                } else {
                    window.location.href = 'http://127.0.0.1:3000/login/index'
                }
            }
        });
    }
})(jQuery);