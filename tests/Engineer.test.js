const Engineer = require("../lib/engineer");

describe("it should build a new employee", () => {
    it("should return an object with the three data points", () => {
        let data = {
            name: 'Jack',
            id: '1',
            email: 'jack@gmail.com',
        };
        const newEngineer = new Engineer(data);
        expect(newEngineer).toBe(newEngineer);
    });
})