var os = require('os');
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
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ~', (uptime / 86400 % 60).toFixed(0), 'dni', (uptime / 3600 % 60).toFixed(0), 'godz', (uptime /60 % 60).toFixed(0), 'min',(uptime % 60).toFixed(0), 'sec');
    // console.log(Time.print());
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;