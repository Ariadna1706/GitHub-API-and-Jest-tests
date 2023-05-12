import token from "./../src/token";
import nodeFetch from "node-fetch";
global.fetch = nodeFetch;
import GitHubSDK from "./../src/GitHubSDK";

describe("GitHubSDK", () => {
  it("check if constructor data is added", () => {
    const gh = new GitHubSDK("Ariadna1706", token);
    expect(gh.user).toBe("Ariadna1706");
    expect(gh.secretToken).toBe(token);
  });

  describe("checkUser", () => {
    it("check if user exists", async () => {
      const gh = new GitHubSDK("Ariadna1706", token);
      const user = await gh.checkUser("Ariadna1706");
      expect(user.login).toBe("Ariadna1706");
    });

    it("throw error if user does not exist", async () => {
      const randomNumber = Math.floor(Math.random() * 25) + 10;
      const login = `Ariadna ${randomNumber}`;

      const gh = new GitHubSDK(login, token);
      expect.assertions(1);

      try {
        await gh.checkUser(login);
      } catch (err) {
        expect(err).toBe("user not found!");
      }
    });
  });

  describe("getUserRepos", () => {
    it("repo exists", async () => {
      const gh = new GitHubSDK("Ariadna1706", token);
      const repoData = await gh.getUserRepos("Ariadna1706");
      const repoNumber = repoData.length;
      if (repoNumber > 0) {
        expect(repoNumber).toBeTruthy;
      }
    });
  });

  describe("getUserRepos", () => {
    it("repo doesn't exist", async () => {
      expect.assertions(1);
      const gh = new GitHubSDK("Ariadna1706", token);
      try {
        const repoData = await gh.getUserRepos("Ariadna170");
      } catch (err) {
        expect(err).toBe("no repos for this user avaliable");
      }
    });
  });

  describe("checkRepoCollaborator", () => {
    it("user is already  collaborator ", async () => {
      expect.assertions(1);
      const gh = new GitHubSDK("Ariadna1706", token);

      try {
        await gh.checkCollaborator("QuotesGenerator");
      } catch (err) {
        expect(err).toBe("user is already a collaborator");
      }
    });

    it("user is not a collaborator", async () => {
      expect.assertions(1);
      const gh = new GitHubSDK("Ariadna1705", token);

      try {
        await gh.checkCollaborator("celery");
      } catch (err) {
        expect(err).toBe("user is not a collaborator");
      }
    });
  });

});
