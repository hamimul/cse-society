(function(){

  //initialize firebase app
  var config = {
    apiKey: "AIzaSyAivApz-1DmiIxJCmoproAxzTRPTS_qq9k",
    authDomain: "sust-csesociety.firebaseapp.com",
    databaseURL: "https://sust-csesociety.firebaseio.com",
    projectId: "sust-csesociety",
    storageBucket: "sust-csesociety.appspot.com",
    messagingSenderId: "609062698075"
  };
  firebase.initializeApp(config);

  const textEmail=document.getElementbyId("textEmail");
  const textPassword=document.getElementbyId("textPasswordl");
  const btnlogin=document.getElementbyId("btnlogin");
  const btnsignup=document.getElementbyId("btnsignup");
  const btnlogout=document.getElementbyId("btnlogout");

  btnlogin.addEventListener('click', e=>{
    const email=textEmail.value;
    const pass=textPassword.value;
    const auth=firebase.auth();
    const promise=auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e=> console.log(e.message);
  });

  btnsignup.addEventListener('click',e->{

      const email=textEmail.value;
      const pass=textPassword.value;
      const auth=firebase.auth();
      const promise=auth.createUserWithEmailAndPassword(email,pass);
      promise
      .catch(e=> console.log(e.message);
  })

  btnlogout.addEventListener('click',e=>{
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser=>{
    if(firebaseUser){
      console.log('firebase user');
      btnlogout.classList.remove('hide');
    } else {
      console.log('not logged in');
      btnlogout.classList.ad('hide');
    }
  })



});




}());
