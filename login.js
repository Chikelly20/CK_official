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
    const auth = firebase.auth()
    const Portfolio = firebase.Portfolio()

  // set up our register function 
  function register () {
    // get all our input fields
    email= document.getElementById ('Email').value
    password = document.getElementById ('Enter Password').value
    // Validate input fields
if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line !!')
    return
    // Don't continue running the code
 } 
// move on with Auth 
auth.createUserWithEmailAndPassword(email,password)
.then(function() {
    //Declare user varaible
    var user = auth.currentUser

    //Add this user to Firebase database
    var database_ref = Portfolio.ref()

    //Create User data
    var user_data = {
        last_login : Date.now()
    }

    Portfolio_ref.child('users/' + user.uid).update(user_data)    



    alert('User Logged In!!')
})
.catch(function(error) {
    //Firebase will use this to alert of its error
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
})




}

    //Set up our login function
    function login () {
        email= document.getElementById ('Email').value
        password = document.getElementById ('Enter Password').value

        //Validate input fields
        if (validate_email(email) == false || validate_password(password) == false) {
            alert('Email or Password is Outta Line !!')
            return
            // Don't continue running the code
    }
    auth.signInWithEmailAndPassword()
    .then(function() {

    })
    .catch(function() {

    })
}





    //Validate Functions
  function validate_email(email){ 
    expression = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|.(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/
    if (expression.test(email) == true) {
        // email is good
        return true
    } else{
    return false
    }
  }

function validate_password(password){
    if (password < 6){
        return false
    } else {
        return true
    }
}
function validate_field(field){
    if (field == null) {
        return false
    }
    if (field.length <= 0){
        return false
        } else{
        return true
        } 
}