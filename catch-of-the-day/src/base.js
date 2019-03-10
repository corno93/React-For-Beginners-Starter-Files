import Rebase from 're-base';
import firebase from 'firebase';

const firebassApp = firebase.initializeApp({
  apiKey: 'AIzaSyA0nVvZk7xZjo2u5dZ6tBCU7rdLwKO2EhA',
  authDomain: 'chatapp-214913.firebaseapp.com',
  databaseURL: 'https://chatapp-214913.firebaseio.com',

});


const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export {firebaseApp};

export default base;