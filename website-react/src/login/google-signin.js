import firebase from 'firebase';

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithRedirect(provider);

firebase.auth()
    .getRedirectResult()
    .then((result) => {
        if (result.credential) {
            var credential = result.credential;
            var token = credential.accessToken; // this is Google Access Token
        }

        var user = result.user;
    }).catch((error) => {
        
    })