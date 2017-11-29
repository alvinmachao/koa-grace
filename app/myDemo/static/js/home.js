(function ($) {
    // console.log($.ajax)
    var obj = {a: 11};
    $.get('/data/info/repo', function (res) {
        console.log(res)
    });


    /*$.ajax({
        url: '/api/info',
        data: JSON.stringify(obj),
        dataType: "json",
        success: function (res) {
            console.log(res)
        }
    });*/
    ajax({
        url: '/api/info',
        data: JSON.stringify(obj),
        dataType: "json",
        success: function (res) {
            console.log(res)
        }
    });
    /*$.get('/test/index', function (res) {
        document.write(res)
    });*/
    document.cookie = "lang=en; path=/;";

})(jQuery)
