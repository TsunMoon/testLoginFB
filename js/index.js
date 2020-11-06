const loginFB = () => {
    var provider = new firebase.auth.FacebookAuthProvider();

    provider.addScope('user_birthday');
    firebase.auth().useDeviceLanguage();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("login success");
        console.log(user);
        localStorage.setItem("userFB",user);
        document.getElementById("imgFb").src =user.photoURL;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

const logoutFB = () => {
  firebase.auth().signOut().then(function() {
    console.log("Logout success");
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}