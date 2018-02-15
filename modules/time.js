var os = require('os');

function Time(){
    var uptime = os.uptime();
        uptime / 86400 % 60 .toFixed(0), 'dni'
        uptime / 3600 % 60 .toFixed(0), 'godz'
        uptime /60 % 60 .toFixed(0), 'min'
        uptime % 60 .toFixed(0), 'sec'
}
console.log(Time);

exports.print = Time