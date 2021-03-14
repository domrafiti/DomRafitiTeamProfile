const Employee = require("../lib/employee");

describe("it should build a new employee", () => {
    it("should return an object with the three data points", () => {
        let data = {
            name: 'Jack',
            id: '1',
            email: 'jack@gmail.com',
        };
        const newEmployee = new Employee(data);
        expect(newEmployee).toBe(newEmployee);
    });
})