
const Engineer = require("../lib/Engineer.js");

test("Can set GitHUb account via the constructor", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("", 1, "test@test.com", testValue);
  expect(employee.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const employee = new Engineer("", 1, "test@test.com", "GitHubUser");
    expect(employee.getRole()).toBe(testValue);
  });

test("Can get GitHub username via the getGithub", () => {
    const testValue = "GitHubUser";
    const employee = new Engineer("", 1, "test@test.com", testValue);
    expect(employee.getGithub()).toBe(testValue);
  });