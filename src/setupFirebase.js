import firebase from 'firebase';
// Required for side-effects
import 'firebase/firestore';

// TODO: #1 Initialize Firebase
// Initialize Cloud Firestore + auth through Firebase
// firebase.initializeApp({
//     apiKey: 'AIzaSyBSedM6NpERtlNo9pYHmO0u63mzmRGe2Fo',
//     authDomain: 'schedule-app-d04b7.firebaseapp.com',
//     projectId: 'schedule-app'
// });


const config = {
    apiKey: 'AIzaSyBSedM6NpERtlNo9pYHmO0u63mzmRGe2Fo',
    authDomain: 'schedule-app-d04b7.firebaseapp.com',
    projectId: 'schedule-app',
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;