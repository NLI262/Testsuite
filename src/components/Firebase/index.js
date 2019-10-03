import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDTq9Mm0X5-QbJO7h188WaW4jefA58xDD0",
    authDomain: "test-suite-management.firebaseapp.com",
    databaseURL: "https://test-suite-management.firebaseio.com",
    projectId: "test-suite-management",
    storageBucket: "test-suite-management.appspot.com",
    messagingSenderId: "567723174552",
    appId: "1:567723174552:web:d69ca4258152297ce0feed"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {
    storage, firebase as default
}