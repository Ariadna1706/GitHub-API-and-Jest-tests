
import token from "./../src/token";
import GitHubSDK from "./GitHubSDK";

document.addEventListener("DOMContentLoaded", init);

const userLogin = document.querySelector(".login");

const gh = new GitHubSDK(
  "Ariadna1706",
token
);

function init() {
  gh.checkUser("Ariadna1706")
    .then((resp) => addUser(resp.login))
    .catch((err) => console.error(err));

  gh.getUserRepos("Ariadna1706")
    .then((resp) => console.log(resp))
    .then((resp) => listUserRepoData(resp))
    .catch((err) => console.error(err));

  gh.checkCollaborator("practice-js-basics-arrays")
    .then((resp) => console.log(resp))
    .catch((err) => console.error(err));
}

function addUser(user) {
  userLogin.textContent = user;
}

function listUserRepoData(RepoArray) {
  const ulEl = document.querySelector(".repos");
  RepoArray.forEach((repo) => {
    const liEl = document.createElement("li");
    liEl.innerHTML = `Name: ${repo.name}
    <a href="${repo.svn_url}">${repo.svn_url}</a>`;

    ulEl.appendChild(liEl);
  });
}
