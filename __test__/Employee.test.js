const { timeStamp } = require('console');
const Employee = require('../lib/Employee.js');

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });

test('Can set name via the constructor argument', () => {
    const name = "";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can set id via the constructor argument", () => {
    const testValue = 10;
    const employee = new Employee("", testValue);
    expect(employee.id).toBe(testValue);
  });

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const employee = new Employee("", 1, testValue);
    expect(employee.email).toBe(testValue);
  });
  
test("Can get name via getName()", () => {
    const testValue = "";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
  });
  
test("Can get id via getId()", () => {
    const testValue = 100;
    const employee = new Employee("Foo", testValue);
    expect(employee.getId()).toBe(testValue);
  });
  
  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const employee = new Employee("", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("", 1, "test@test.com");
    expect(employee.getRole()).toBe(testValue);
  });