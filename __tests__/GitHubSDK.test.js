import nodeFetch from "node-fetch";
global.fetch = nodeFetch;
import GitHubSDK from "./../src/GitHubSDK";

describe("GitHubSDK", () => {
  it("check if constructor data is added", () => {
    const gh = new GitHubSDK("Ariadna1706", "token");
    expect(gh.user).toBe("Ariadna1706");
    expect(gh.secretToken).toBe("token");
  });

  describe("checkUser", () => {
    it("check if limit exceeded", async () => {
      expect.assertions(1);
      const gh = new GitHubSDK("Ariadna1706", "token");

      try {
        await gh.checkUser("Ariadna1706");
      } catch (err) {
        expect(err).toBe("Limit exceeded");
      }
    });

    it("check if user exists", async () => {
      const gh = new GitHubSDK("Ariadna1706", "token");
      const user = await gh.checkUser("Ariadna1706");
      expect(user.login).toBe("Ariadna1706");
    });

    it("throw error if user does not exist", async () => {
      //expect.assertions(1);
      const gh = new GitHubSDK("AtiadnaLoginNieIstnieje", "token");

      try {
        await gh.checkUser("AtiadnaLoginNieIstnieje");
      } catch (err) {
        expect(err).toBe("user not found!");
      }
    });
  });

  describe("getUserRepos", () => {
    it("get user repos data", async () => {
      const gh = new GitHubSDK("Ariadna1706", "token");

      const repoData = await gh.getUserRepos("Ariadna1706");

      expect(repoData.length).toEqual(21);
    });
  });

  describe("checkRepoCollaborator", () => {
    it("check if collaborator for QuotesGenerator Repo", async () => {
      const gh = new GitHubSDK("bogolubow");

      try {
        await gh.checkCollaborator("QuotesGenerator", "bogolubow");
      } catch (err) {
        expect(err).toBe("user is not a collaborator");
      }
    });
  });
});