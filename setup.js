var setup = {
    
}
setup.saveName = function(userName) {
    if(userName != null) {
        document.cookie = "userName=" + userName + "; expires=Fri, 31 Dec 9999 23:59:59 UTC";
        window.location.reload();
    }
}