
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCfAmdG-S8lUeEQ4BqzEE-KzC4sDIGsOHI",
    authDomain: "videojuego-1ac36.firebaseapp.com",
    projectId: "videojuego-1ac36",
    storageBucket: "videojuego-1ac36.appspot.com",
    messagingSenderId: "1003398876155",
    appId: "1:1003398876155:web:38e360fe37ae558636995e",
    measurementId: "G-V9B1JF01TM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
