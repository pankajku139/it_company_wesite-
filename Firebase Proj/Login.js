import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZMHCh3Rdbdjg3YXgUJZs5ldGpVZIHZiw",
  authDomain: "auth-46aca.firebaseapp.com",
  projectId: "auth-46aca",
  storageBucket: "auth-46aca.appspot.com",
  messagingSenderId: "735459208404",
  appId: "1:735459208404:web:9fee4b816738c125029f41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();


//GOOGLE BUTTON

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "grand.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

//submit
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account....");
      window.location.href="index.html";
            // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
