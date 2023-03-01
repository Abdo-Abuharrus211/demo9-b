
//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    //keys go here 
    apiKey: "AIzaSyCEJEiKKNqD6dFLdgOWhOXv8N3_dB3zL0s",
    authDomain: "comp1800-ba088.firebaseapp.com",
    projectId: "comp1800-ba088",
    storageBucket: "comp1800-ba088.appspot.com",
    messagingSenderId: "496254016562",
    appId: "1:496254016562:web:156aa56b7cc16cd6f2b02b"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();