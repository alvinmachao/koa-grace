#!/usr/bin/env node

'use strict';

global.Promise = require('bluebird')


const http = require('http');
const fs = require('fs');
const path = require('path');
const utils = require('../src/utils');

const args = utils.parseArg();
const config = global.config = require('../src/config')(args);

// require('../src/app').listen(config.site.port);

//socket io  2017.11.21
var sio = require('socket.io')
var app = require('../src/app')
var server = require('http').createServer(app.callback());
var socket = require('socket.io')(server);
server.listen(config.site.port)
socket.on('connection', function (sockets) {
    console.log("建立socket链接")
})
setInterval(function () {
    socket.send("您好")
},5000)

socket.on('message', function (message) {
    console.log('接收到一个消息：', message)
})
socket.on('disconnect', function () {
    console.log("断开socket链接")
})