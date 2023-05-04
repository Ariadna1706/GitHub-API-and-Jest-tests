import GitHubSDK from "./GitHubSDK";

document.addEventListener("DOMContentLoaded", init);

const userLogin = document.querySelector(".login");

const gh = new GitHubSDK();

function init() {

   gh.checkUser("Ariadna1706")
     .then((resp) => addUser(resp.login))
     .catch((err) => console.error(err));
 
}

function addUser(user) {
  userLogin.textContent = user
}


