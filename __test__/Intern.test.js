const Intern = require("../lib/Intern.js");

test("Can set school via the constructor", () => {
    const testValue = "";
    const employee = new Intern("", 1, "test@test.com", testValue, "Intern");
    expect(employee.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const employee = new Intern("", 1, "test@test.com", "", "Intern");
    expect(employee.getRole()).toBe(testValue);
});

test("Can get school via the getSchool function", () => {
    const testValue = "";
    const employee = new Intern("", 1, "test@test.com", testValue, "Intern");
    expect(employee.getSchool()).toBe(testValue);
});