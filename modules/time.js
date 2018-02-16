function time(uptime) {        
    console.log((uptime / 86400 % 30).toFixed(0), 'dni',
        (uptime / 3600 % 60).toFixed(0), 'godz',
        (uptime /60 % 60).toFixed(0), 'min',
        (uptime % 60).toFixed(0), 'sec');
}

exports.print = time
