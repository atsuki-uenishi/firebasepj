import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp( 
        {
            apiKey: "AIzaSyBHiJzD9RKvv76cU8D8Kk1RflFYT3S6_Ww",
            authDomain: "fir-pj-996d6.firebaseapp.com",
            projectId: "fir-pj-996d6",
            storageBucket: "fir-pj-996d6.appspot.com",
            messagingSenderId: "901074581405",
            appId: "1:901074581405:web:c33221e94ee96331cee174",
            measurementId: "G-FRJN9NHNDM"
        }
    )
}

export default firebase