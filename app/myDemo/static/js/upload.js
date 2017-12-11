var num = 0;
var sta = {
    "inited": "初始状态",
    "queued": "等待上传",
    "progress": "上传中",
    "complete": "上传完成",
    "error": "上传出错",
    "interrupt": "上传中断",
    "invalid": "文件不合格",
    "cancelled": "文件被移除"
}
var uploader = WebUploader.create({

    // swf文件路径
    swf: "/myDemo/static" + '/js/Uploader.swf',

    // 文件接收服务端。
    server: '/upload/upload',

    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick: '#picker',

    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
    resize: false,
    duplicate: true
});
// 当有文件被添加进队列的时候
uploader.on('fileQueued', function (file) {
    $("#thelist").append('<div id="' + file.id + '" class="item">' +
        '<h4 class="info">' + file.name + '</h4>' + '<img>' +
        '<p class="state">等待上传...</p>' +
        '<button class="del">取消</button>' +
        '</div>');
    var $img = $("#" + file.id).find('img');

    // 创建缩略图
    // 如果为非图片文件，可以不用调用此方法。
    // thumbnailWidth x thumbnailHeight 为 100 x 100
    uploader.makeThumb(file, function (error, src) {
        if (error) {
            $img.replaceWith('<span>不能预览</span>');
            return;
        }

        $img.attr('src', src);
    }, 100, 100);
});
// 文件上传过程中创建进度条实时显示。
uploader.on('uploadProgress', function (file, percentage) {
    var $li = $('#' + file.id),
        $percent = $li.find('.progress .progress-bar');

    // 避免重复创建
    if (!$percent.length) {
        $percent = $('<div class="progress progress-striped active">' +
            '<div class="progress-bar" role="progressbar" style="width: 0%">' +
            '</div>' +
            '</div>').appendTo($li).find('.progress-bar');
    }

    $li.find('p.state').text('上传中');

    $percent.css('width', percentage * 100 + '%');
});
uploader.on('uploadSuccess', function (file) {
    $('#' + file.id).find('p.state').text('已上传');
});

uploader.on('uploadError', function (file) {
    $('#' + file.id).find('p.state').text('上传出错');
});

uploader.on('uploadComplete', function (file) {
    $('#' + file.id).find('.progress').fadeOut();
    num += 1;
    var st = file.getStatus();
    $("#resultList").show().append(
        ' <div><span>' + num + '</span><span title="' + file.name + '">' + file.name + '</span><span>' + sta[st] + '</span></div>'
    )
});
$("#ctlBtn").on('click', function () {
    uploader.upload();
});

// 当所有文件上传结束时触发
uploader.on("uploadFinished", function() {
    console.log("uploadFinished:");
});

//不过我们可以通过WebUploader的API来验证返回信息，判断是否上传成功
uploader.on("uploadAccept", function (file, data) {
    if (data.code == 1) {
        // 通过return false来告诉组件，此文件上传有错。
        $('#' + file.id).find('p.state').text('上传出错');
        return false;
    }
});
$(document).on('click', function (e) {
    var tar = e.target;
    if ($(tar).hasClass('del')) {
        var id = $(tar).parent().attr('id');
        var allFiles = uploader.getFiles();
        var curFile = allFiles.filter(function (item, index) {
            return item.id == id
        });
        console.log(curFile[0]);
        console.log(curFile[0].getStatus());
        var curFileSta = curFile[0].getStatus();
        if (curFileSta != "progress" && curFileSta != "complete" && curFileSta != "error") {
            $(tar).parent().remove();
            uploader.removeFile(id, true)
        } else {
            var str = "上传中,请勿取消";
            if (curFileSta == "complete" || curFileSta == "error") {
                str = "上传完成,无法取消"
            }
            alert(str);
        }

    }
});
