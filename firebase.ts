// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBI2_9KxiGwfBnl4iVtXBPUYZeY0UyYkUw',
  authDomain: 'sakeranking.firebaseapp.com',
  projectId: 'sakeranking',
  storageBucket: 'sakeranking.appspot.com',
  messagingSenderId: '547516099944',
  appId: '1:547516099944:web:df1e8c689e533607347add',
  measurementId: 'G-77WNQVHT2S'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
