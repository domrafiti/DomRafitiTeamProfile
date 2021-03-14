const Manager = require("../lib/manager");

describe("it should build a new employee", () => {
    it("should return an object with the three data points", () => {
        let data = {
            name: 'Jack',
            id: '1',
            email: 'jack@gmail.com',
        };
        const newManager = new Manager(data);
        expect(newManager).toBe(newManager);
    });
})