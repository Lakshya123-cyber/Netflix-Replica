import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need to seed the database

// we need to config here
const config = {
    apiKey: "AIzaSyCO3kc6mTwEdZ4rV7BBqyk2p0cwii-FCMs",
    authDomain: "netflix-e1647.firebaseapp.com",
    projectId: "netflix-e1647",
    storageBucket: "netflix-e1647.appspot.com",
    messagingSenderId: "10028817594",
    appId: "1:10028817594:web:4aa56ee9e15ee7f2da3683"
};

const firebase = Firebase.initializeApp(config);


export { firebase };