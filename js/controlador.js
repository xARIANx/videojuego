import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
//referenciar el avatar
//referencia para salir
let avatar=document.getElementById("avatar")
let botonsalir=document.getElementById("botonsalir")
let loguin=document.getElementById("btnlogin")

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("usuario autenticado")
    avatar.textContent=user.email
    avatar.classList.remove("invisible")
    loguin.classList.remove("invisible")

    // rutina de salida 
    botonsalir.addEventListener("click",function(evento){

           
      signOut(auth).then(() => {
        avatar.classList.add("invisible")
        loguin.classList.add("invisible")
        window.location.href="index.html"
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })

    })
  } else {
    avatar.classList.add("invisible")
      
    // User is signed out
    // ...
  }
});