exports.upload = async function () {
    let files = await this.upload();
    let res = {};

    if (!files || files.length < 1) {
        res.code = 1;
        res.message = '上传文件失败！';
        return this.body = res;
    }

    res.code = 0;
    res.message = '';
    res.data = {
        files: files
    }

    return this.body = res;
}
