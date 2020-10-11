  
const Manager = require("../lib/Manager.js");
const Employee = require("../lib/Employee.js");

test("Can set office number via the constructor argument", () => {
    const testValue = 10;
    const employee = new Manager("", 1, "test@test.com", testValue, "Manager");
    expect(employee.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const employee = new Manager("", 1, "test@test.com", 10, "Manager");
    expect(employee.getRole()).toBe(testValue);
});

test("Can get office number via the getOffice", () => {
    const testValue = 10;
    const employee = new Manager("", 1, "test@test.com", testValue, "Manager");
    expect(employee.getOfficeNumber()).toBe(testValue);
});
