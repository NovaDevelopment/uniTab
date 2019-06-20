var clock = {testConsoleMessagesDisplayed:0, statusDisplayed:false};
var user = {name:undefined};
function refreshclock() {
    document.getElementById("clockText").textContent = moment().format('MMMM D, YYYY');
    document.getElementById("dateText").textContent = moment().format("H:mm");
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
    document.getElementById("greeting").textContent = "Hello, " + getCookie("userName") + ".";
}
setInterval(refreshclock, 1000);
document.getElementById("googleSearch").addEventListener("keydown", function() {
    if(event.which === 13) {
        gSearch(document.getElementById('googleSearch').value);
    }
}, false);
document.getElementById("button-Search").addEventListener("click", function() {
    gSearch(document.getElementById('button-Search').value);
}, false);
document.getElementById("button-SaveName").addEventListener("click", function() {
    setup.saveName(document.getElementById('userName').value);
}, false);