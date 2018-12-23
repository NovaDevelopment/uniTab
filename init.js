var clock = {testConsoleMessagesDisplayed:0, statusDisplayed:false};
var user = {name:undefined, };
function refreshclock() {
    document.getElementById("clockText").innerHTML = moment().format('MMMM D, YYYY') + "<br>" + moment().format("H:m")
    if(clock.testConsoleMessagesDisplayed <= 10){
        console.log("Clock refreshed on " + moment().format('YYYY.MM.DD') + " at " + moment().format("HH.mm.ss"))
        clock.testConsoleMessagesDisplayed ++;
    }
    else if(!clock.statusDisplayed){
        console.log("Clock appears to be functioning normally. Stopping clock refresh console messages.");
        clock.statusDisplayed = true;
    }
}
if(getCookie("userName") == undefined) {
    document.getElementById("setup-name").removeAttribute("hidden");
}
else {
    document.getElementById("greeting").innerHTML = "Hello, " + getCookie("userName") + ".";
}
setInterval(refreshclock, 1000);