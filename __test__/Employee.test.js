const { timeStamp } = require('console');
const Employee = require('../lib/Employee.js');

test('Can instantiate Employee instance', () => {
    const employee = new Employee();

    expect(employee.name).toBe(name);
});

