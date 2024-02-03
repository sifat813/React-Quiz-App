import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: 'AIzaSyC375ZO2fzdD_4MPdktKMLn6GFxY9CKuE0',
  
    authDomain:  'quiz-dev-5ee15.firebaseapp.com',
  
    projectId: 'quiz-dev-5ee15',
  
    storageBucket: 'quiz-dev-5ee15.appspot.com',
  
    messagingSenderId: '795200328224',
  
    appId: '1:795200328224:web:d1e138d0b55172118e2245',

    databaseURL: 'https://quiz-dev-5ee15-default-rtdb.asia-southeast1.firebasedatabase.app',
}
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;