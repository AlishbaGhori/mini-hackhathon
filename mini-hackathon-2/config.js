<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCJbIL28lrop10qkm8boKxcKyVNTIxJwwM",
    authDomain: "mini-hackathon-a72dd.firebaseapp.com",
    projectId: "mini-hackathon-a72dd",
    storageBucket: "mini-hackathon-a72dd.appspot.com",
    messagingSenderId: "19289202410",
    appId: "1:19289202410:web:ffc52afba425c4be408193",
    measurementId: "G-L29WH0DVSX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>