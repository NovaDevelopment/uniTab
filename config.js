// Clock Configuration Script:

var clock = document.getElementById("clock");
function clockConfig(timeZone, forcereset) {
    if(getCookie("clockTimeZone") == undefined || forcereset == true) {
        switch(timeZone) {
            case "ST":
                document.cookie = "clockTimeZone=ST; expires=Tue, 31 Dec 2999 23:59:59 UTC";
                window.location.reload();
                break;
            case "HAT":
                document.cookie = "clockTimeZone=HAT; expires=Tue, 31 Dec 2999 23:59:59 UTC"
                window.location.reload();
                break;
            case "AKT":
                document.cookie = "clockTimeZone=AKT; expires=Tue, 31 Dec 2999 23:59:59 UTC"
                window.location.reload();
                break;
            case "PT":
                document.cookie = "clockTimeZone=PT; expires=Tue, 31 Dec 2999 23:59:59 UTC"
                window.location.reload();
                break;
            case "MT":
                document.cookie = "clockTimeZone=MT; expires=Tue, 31 Dec 2999 23:59:59 UTC"
                window.location.reload();
                break;
            case "CT":
                document.cookie = "clockTimeZone=CT; expires=Tue, 31 Dec 2999 23:59:59 UTC"
                window.location.reload();
                break;
            case "ET":
                document.cookie = "clockTimeZone=ET; expires=Tue, 31 Dec 2999 23:59:59 UTC"
                window.location.reload();
                break;
            case "AT":
                document.cookie = "clockTimeZone=AT; expires=Tue, 31 Dec 2999 23:59:59 UTC"
                window.location.reload();
                break;
            case "ChST":
                document.cookie = "clockTimeZone=ChST; expires=Tue, 31 Dec 2999 23:59:59 UTC"
                window.location.reload();
                break;
            case "WIT":
                document.cookie = "clockTimeZone=WIT; expires=Tue, 31 Dec 2999 23:59:59 UTC"
                window.location.reload();
                break;
            case "UTC":
                document.cookie = "clockTimeZone=UTC; expires=Tue, 31 Dec 2999 23:59:59 UTC"
                window.location.reload();
                break;
        }
    }
}
if(getCookie("clockTimeZone") == undefined) {
            document.getElementById("clockConfig_form").removeAttribute("hidden")
}
else {
    switch(getCookie("clockTimeZone")) {
                 case "ST":
                    clock.src = "clockFrames/ST.html";
                    break;
                case "HAT":
                    clock.src = "clockFrames/HAT.html";
                    break;
                case "AKT":
                    clock.src = "clockFrames/AKT.html";
                    break;
                case "PT":
                    clock.src = "clockFrames/PT.html";
                    break;
                case "MT":
                    clock.src = "clockFrames/MT.html";
                    break;
                case "CT":
                    clock.src = "clockFrames/CT.html";
                    break;
                case "ET":
                    clock.src = "clockFrames/ET.html";
                    break;
                case "AT":
                    clock.src = "clockFrames/AT.html";
                    break;
                case "ChST":
                    clock.src = "clockFrames/ChST.html";
                    break;
                case "WIT":
                    clock.src = "clockFrames/WIT.html";
                    break;
                case "UTC":
                    clock.src = "clockFrames/UTC.html";
                    break;   
    }
}

// Name Configuration Script:

function nameConfig(userName, forcereset) {
    if(getCookie("userName") == undefined || forcereset == true) {
        document.cookie = "userName = " + document.getElementById("userName").value + "; expires=Tue, 31 Dec 2999 23:59:59 UTC"
        window.location.reload()
    }
}
if(getCookie("userName") == undefined) {
    document.getElementById("nameConfigForm").removeAttribute("hidden");
    document.getElementById("greeting").setAttribute("hidden", undefined)
}
else {
    document.getElementById("greeting").innerHTML = "Hello, " + getCookie("userName") + ".";
}

// Reset Script:

function clockReset(integration) {
    if(!integration) {
        if(window.confirm("Would you like to reconfigure the clock?")) {
            document.cookie = "clockTimeZone = resetPending; path=/";
            window.alert("Please close and then reopen your browser to reset. You can do this at any time.");
            window.close();
        }
        else {
            alert("Reconfiguration cancelled.")
        }
    }
    else {
        document.cookie = "clockTimeZone = resetPending; path=/";
    }
}
function nameReset(integration) {
    if(!integration) {
        if(window.confirm("Would you like to reconfigure your username?")) {
            document.cookie = "userName = resetPending; path=/";
            window.alert("Please close and then reopen your browser to reset. You can do this at any time.");
            window.close();
        }
        else {
            alert("Reconfiguration cancelled.")
        }
    }
    else {
       document.cookie = "userName = resetPending; path=/";
    }
}
function resetAll() {
    if(window.confirm("Would you like to reconfigure all settings?")) {
        clockReset(true);
        nameReset(true);
        window.alert("Please close and then reopen your browser to reset. You can do this at any time.");
        window.close();
    }
}