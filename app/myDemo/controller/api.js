'use strict';

exports.info = async function () {
    /* await this.proxy({
         local:'local:post:test/data_post'
     })*/
    /*var local = config.api.local
    var api = config.api.api
    await this.proxy({
        test1: 'local:post:test/data_post',
        test: 'api:get:api/hh'
    })
    console.log("**@@@****@@@*****@*@@**@@*@*@")
    console.log(this.backData);*/
    this.body = {
        code: 1,
        msg: ""
    }
};
exports.checkSession = async function () {
    var ran = Math.random();
    console.log(ran);
    if (ran > 0.5) {
        this.body = {
            code: 0,
            msg: "normal"
        }
    } else {
        this.body = {
            code: 1,
            msg: "session is expired"
        }
    }

}

