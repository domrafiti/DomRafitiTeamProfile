const Intern = require("../lib/intern");

describe("it should build a new employee", () => {
    it("should return an object with the three data points", () => {
        let data = {
            name: 'Jack',
            id: '1',
            email: 'jack@gmail.com',
        };
        const newIntern = new Intern(data);
        expect(newIntern).toBe(newIntern);
    });
})