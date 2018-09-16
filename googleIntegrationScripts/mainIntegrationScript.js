if(auth2.isSignedIn.get()) {
    document.getElementById("googleSignIn_button").hidden = "true";
}
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    nameConfig(profile.getName(), true);
    /*
    REMAINING SAMPLE CODE (FOR REFERENCE):
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    */
}