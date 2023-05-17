# GitHub public repositories list


The main goal of this project was to practice the use of GitHub REST API solutions and JavaScript Testing. 


&nbsp;

 
## 💡 Technologies

[![My Skills](https://skillicons.dev/icons?i=js,html,css,webpack,jest )](https://skillicons.dev)


&nbsp;
 
## 🤔 Solutions provided in the project

- use of GitHub REST API
- use of Jest - JavaScript Testing Framework
- Test-driven development (TDD)

code sample:

```
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
  ```


&nbsp;

## 🙋‍♂️ Feel free to contact me
I'm aspiring junior web developer, I'm deeply interested in web design, UX/UI and web development. One of may strength is constant willingnes to learn and develop my skills. If you would like to contact me you can find me on [LinkedIn](https://www.linkedin.com/in/ariadna-nicieja/)

&nbsp;

## 👏 Special thanks / Credits
Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) – for providing me with this task and for code review.

