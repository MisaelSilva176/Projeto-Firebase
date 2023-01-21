
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore'; 
// import 'firebase/storage';



// let firebaseConfig = {
//     apiKey: "AIzaSyBWHh_pajRh5UPwJxBO5ljS6-NJnRQLp00",
//     authDomain: "sistema-f856e.firebaseapp.com",
//     projectId: "sistema-f856e",
//     storageBucket: "sistema-f856e.appspot.com",
//     messagingSenderId: "269022329589",
//     appId: "1:269022329589:web:eb63e2d3b1d9c2845da3bc",
//     measurementId: "G-66P78S2DGF"
//   };


//   if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
//   }
//   export default firebase;


import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'

//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAjDPdyIqpd-jgLpngxo8Maf4R2dX7KKG0",
  authDomain: "curso-4cb08.firebaseapp.com",
  projectId: "curso-4cb08",
  storageBucket: "curso-4cb08.appspot.com",
  messagingSenderId: "804879482935",
  appId: "1:804879482935:web:c3d13b0bce6f7fd6cbffb2",
  measurementId: "G-7JDDZ9VBX4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// const firebaseConfig = {
//   apiKey: "AIzaSyBx9WFTQC2XIi-4xE1adOMQYaxEEeshZFg",
//   authDomain: "cursoapp-f0398.firebaseapp.com",
//   projectId: "cursoapp-f0398",
//   storageBucket: "cursoapp-f0398.appspot.com",
//   messagingSenderId: "394026650841",
//   appId: "1:394026650841:web:2072c9f66868dfd41ac2c8",
//   measurementId: "G-JST0NMT5EC"
// };

//Firebase SDK version: 9.6.7
// const firebaseApp = initializeApp(firebaseConfig);

// const db = getFirestore(firebaseApp);


// export default { db, auth };