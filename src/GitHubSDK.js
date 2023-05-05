export default class GitHubSDK {
  constructor(user, secretToken) {
    this.user = user;
    this.secretToken = secretToken;
  }

  checkUser(user) {
    const apiUrl = `https://api.github.com/users`;

    return fetch(`${apiUrl}/${user}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
       // Authorization: `Bearer ${this.secretToken}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      if (resp.status === 403) {
        return Promise.reject("Limit exceeded");
      }

      if (resp) {
        return Promise.resolve(resp);
      } else {
        return Promise.reject("user not found!");
      }
    });
  }

  getUserRepos(user) {
    const apiUrl = `https://api.github.com/users/${user}/repos`;

    return fetch(apiUrl, {
      headers: {
        Accept: "application/vnd.github+json",
        //Authorization: `Bearer ${this.secretToken}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    });
  }

  checkCollaborator(repo) {

    const apiUrl = `https://api.github.com/repos/Ariadna1706/${repo}/collaborators/${this.user}`;

    return fetch(apiUrl, {
      headers: {
        Accept: "application / vnd.github + json",
       // Authorization: `Bearer ${this.secretToken}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }

      return Promise.reject(resp)
   //   if (resp.status === 404) {
   //     return Promise.reject("user is not a collaborator");
   //   }

   //    if (resp.status === 204) {
   //      return Promise.reject("user is already a collaborator");
   //    }
      
   });
  }

  sendInvitation(){

  }
}
