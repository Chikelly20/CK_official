  // Import the functions you need from the SDKs you need
  import { getAuth,  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBm2gxTqoG1tvHC-r0oeVuKggLKcEQdA3U",
    authDomain: "login-page-for-portfolio.firebaseapp.com",
    projectId: "login-page-for-portfolio",
    storageBucket: "login-page-for-portfolio.appspot.com",
    messagingSenderId: "917107693393",
    appId: "1:917107693393:web:db2150018fb21c686be570"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
console.log(56)
const create_User = document.getElementById("submit");
create_User.addEventListener("click", function (event) {
    event.preventDefault();
    // alert("success")
    const email= document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    window.location.href = "home.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
    console.log(errorMessage)
    // ..
  });

    
})
