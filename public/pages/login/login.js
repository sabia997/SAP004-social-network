import { firebaseLogin } from "./data.js";

export const authLogin = () => {
  const container = document.createElement("div");

  const template = `
    <header>
    <h1 class='logo'></h1>
    <h2 class='bv'>Bem Vindx!</h2>
    </header>
    <div class='menu'>
      <input class='input margin' type='email' id='e-mail' placeholder='Email'> 
      <input class='input margin' type='password' id='password' placeholder='Senha'> 
    <a class='login margin' id='login' href='/#home'>Entrar<a/>  
    </div>
  <div class='color cad'>
    <h3>Ou conecte-se com</h3>

  <img class='image' id='google' src='imagens/go.png'>
    <p> Você ainda não é cadastrado? </br>
    Cadastre-se <a href='/#cadastro'>aqui!</a>
    </p>
  </div>
  <footer>
  <p>©Stay Home Bar</p>  
  </footer>;`;

  container.innerHTML = template;

  const loginButton = container.querySelector("#login");

  loginButton.addEventListener("click", () => {
    const registeredEmail = container.querySelector("#e-mail").value;
    const registeredPassword = container.querySelector("#password").value;
    const authentication = firebaseLogin(registeredEmail, registeredPassword);
    firebaseLogin(authentication);
  });
  /* 
    return container; */
  /*  }; */

  const btnGoogle = container.querySelector("#google");
  btnGoogle.addEventListener("click", () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  });
  /* const btnFace = container.querySelector('#facebook');
        btnFace.addEventListener('click',()=>{
        implementation ='com.google.firebase:firebase-auth:19.1.0'
        https://social-network-lab1.firebaseapp.com/__/auth/handler */

  return container;
};

//<img class='image' id='facebook'  src='imagens/fa.png'>
