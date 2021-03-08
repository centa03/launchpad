function clock() {
    var fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
    var mon = fullDate.getMonth() + 1;
    var d = fullDate.getDate();
    var yr = fullDate.getFullYear();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(mins < 10){
        mins = "0" + mins;
    }
    if(secs < 10){
        secs = "0" + secs;
    }
    if(mon < 10){
        mon = "0" + mon;
    }
    if(d < 10){
        d = "0" + d;
    }

    document.getElementById("month").innerHTML = mon + "/";
    document.getElementById("day").innerHTML = d + "/";
    document.getElementById("year").innerHTML = yr;

    document.getElementById("hour").innerHTML = hours + ":";
    document.getElementById("minute").innerHTML = mins + ":";
    document.getElementById("seconds").innerHTML = secs;
}
document.getElementById('srch').focus();
setInterval(clock, 100);
