exports.home = async function () {
    await this.bindDefault();

    /**
     * 其实你还可以这么写proxy:
     await this.proxy({
	  	repoInfo: 'github:repos/xiongwilee/koa-grace'
	  })
     * 然后在 this.backData.repoInfo 中就可以拿到返回参数
     */
    console.log("**********************")
    console.log(this.cookies.get('lang'));

    await this.render('home', {
        title: 'Hello , Grace!'
    });
};
exports.login = async function () {
    console.log("**********************")
    console.log(this.cookies.get('lang'));
    var lang = this.cookies.get('lang');
    //默认语言zh 中文
    if (!lang) {
        lang = "zh"
    }
    await this.bindDefault();
    await this.render('login');
}
exports.uploadDemo = async function () {
    console.log("**********************")
    console.log(this.cookies.get('lang'));
    var lang = this.cookies.get('lang');
    //默认语言zh 中文
    if (!lang) {
        lang = "zh"
    }
    await this.bindDefault();
    await this.render('uploadDemo');
}