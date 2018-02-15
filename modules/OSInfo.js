var os = require('os');
var colors = require('colors');
// var Time = require('../modules/time')


function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.green, type);
    console.log('Release:'.blue, release);
    console.log('CPU model:'.yellow, cpu);
    console.log('Uptime: '.red, (uptime / 86400 % 30).toFixed(0), 'dni', (uptime / 3600 % 60).toFixed(0), 'godz', (uptime /60 % 60).toFixed(0), 'min',(uptime % 60).toFixed(0), 'sec');
    // console.log(Time.print());
    console.log('User name:'.grey, userInfo.username);
    console.log('Home dir:'.cyan, userInfo.homedir);
}

exports.print = getOSinfo;