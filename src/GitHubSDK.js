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
        Authorization: `Bearer ${this.secretToken}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      if (resp.status === 403) {
        return Promise.reject("Limit exceeded");
      }

      if (resp.status === 404) {
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
        Authorization: `Bearer ${this.secretToken}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      if (resp > 0) {
        return Promise.reject(resp);
      } else return Promise.reject("no repos for this user avaliable");
    });
  }

  checkCollaborator(repo) {
    const apiUrl = `https://api.github.com/repos/Ariadna1706/${repo}/collaborators/${this.user}`;

    return fetch(apiUrl, {
      headers: {
        Accept: "application / vnd.github + json",
        Authorization: `Bearer ${this.secretToken}`,
      },
    }).then((resp) => {
      if (resp.status === 204) {
        return Promise.reject("user is already a collaborator");
      }
      if (resp.ok) {
        return resp.json();
      }

      if (resp.status === 404) {
        return Promise.reject("user is not a collaborator");
      }

      return Promise.reject(resp);
    });
  }

  sendInvitation(repo, userName) {
    const url = `https://api.github.com/repos/Ariadna1706/${repo}/collaborators/${userName}`;

    const promise = fetch(url, {
      method: "PUT",
      credentials: "same-origin",
      redirect: "follow",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${this.secretToken}`,
      },
      body: JSON.stringify({
        permission: "pull",
      }),
    });

    return promise
    .then(resp => {
      
      if(resp.status === 201){
          return Promise.resolve("invitation sent");
      }

      if (resp.status === 204) {
        return Promise.reject("invitation already sent");
      }
      

    
    }) 


    
    
  }
}
