'use strict';

exports.info = {
    repo: async function () {
        console.log('this.request.body:')
        console.log(this.request.body)
        console.log('this.proxy:')
        console.log(this.proxy)
        console.log("this.backData:")
        console.log(this.backData)
        await this.proxy('github_api:repos/xiongwilee/koa-grace')
        // await this.proxy('10.10.20.40:8888/api_hh')

    }
}

exports.session = async function () {
    this.session.test = this.session.test || 0;
    this.session.test++;

    this.body = this.session.test
}
