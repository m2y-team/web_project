var config = {
  apiKey: "AIzaSyCGTI1ODBg3XJlsSbRjJYcAsCBHc8XYIU0",
  authDomain: "healthowl-a7807.firebaseapp.com",
  databaseURL: "https://healthowl-a7807.firebaseio.com",
  storageBucket: "healthowl-a7807.appspot.com",
  messagingSenderId: "615622025026"
};

firebase.initializeApp(config);

function signedClick(){

  console.log("yes!!!");
  var login = $('#txtemail').val();
  var pwd = $('#txtpwd').val();
  var auth = firebase.auth();

  //var promise = auth.signInWithEmailAndPassword(login, pwd);
  //console.log(promise);
  //promise.catch(e => console.log(e.message));
  //

  firebase.auth().signInWithEmailAndPassword(login, pwd)

  .then(function(firebaseUser) {
       console.log("success");
       window.location.href = "menu.html";
   })

  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode === 'auth/wrong-password') {
      $("#footer").html("");
      $("#footer").html('Wrong password.');

  } else {
    $("#footer").html("");
    $("#footer").html(errorMessage);


  }

  console.log(error);

});

//console.log(currentUser);

//
}
window.onload =function(){
  document.querySelector('.cont_centrar').className = "cont_centrar cent_active";

}
