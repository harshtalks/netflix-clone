import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

//seed the database

const config = {
  apiKey: "AIzaSyC8d95JrVfHfIp8U1AeFpW4z_ci_OM_WPc",
  authDomain: "buddyapp-e7fb8.firebaseapp.com",
  databaseURL: "https://buddyapp-e7fb8.firebaseio.com",
  projectId: "buddyapp-e7fb8",
  storageBucket: "buddyapp-e7fb8.appspot.com",
  messagingSenderId: "443047235665",
  appId: "1:443047235665:web:62eefa9223aab2fcd0a870"
};



const firebase = Firebase.initializeApp(config)



export { firebase }