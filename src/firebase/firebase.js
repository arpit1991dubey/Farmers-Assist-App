import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyBE7KQskni_FIYPvG7Afi1yCb_PH4N5pJQ",
  authDomain: "tarp-25276.firebaseapp.com",
  databaseURL: "https://tarp-25276-default-rtdb.firebaseio.com",
  projectId: "tarp-25276",
  storageBucket: "tarp-25276.appspot.com",
  messagingSenderId: "1073600720815",
  appId: "1:1073600720815:web:0bd795ec8ab150f64dc95a",
};


// apiKey: "AIzaSyBE7KQskni_FIYPvG7Afi1yCb_PH4N5pJQ",
// authDomain: "tarp-25276.firebaseapp.com",
// projectId: "tarp-25276",
// storageBucket: "tarp-25276.appspot.com",
// messagingSenderId: "1073600720815",
// appId: "1:1073600720815:web:0bd795ec8ab150f64dc95a",
// measurementId: "G-0NWJC2DYCP"
if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };
