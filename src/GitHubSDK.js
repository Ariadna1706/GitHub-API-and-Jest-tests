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
        //Authorization: `token ${this.secretToken}`,
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

  
}
