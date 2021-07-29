import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
 

const config={
    apiKey: "AIzaSyByhvV0YRf2nKisSuarbI-gs851CK8KagE",
    authDomain: "netflix-26220.firebaseapp.com",
    projectId: "netflix-26220",
    storageBucket: "netflix-26220.appspot.com",
    messagingSenderId: "748150254127",
    appId: "1:748150254127:web:30a25a3cc13b151482b4da"
};

const firebase=Firebase.initializeApp(config);
 
export {firebase};

