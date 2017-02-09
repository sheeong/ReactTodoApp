import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAfXqCT-Eww8jhPKKNDXXWAnXWWDhga_iA",
    authDomain: "mead-todo-app-96603.firebaseapp.com",
    databaseURL: "https://mead-todo-app-96603.firebaseio.com",
    storageBucket: "mead-todo-app-96603.appspot.com",
    messagingSenderId: "215458734670"
  };
  firebase.initializeApp(config);
} catch (e) {

}


export var firebaseRef = firebase.database().ref();
export default firebase;
