const Employee = require('./employee');

class Intern extends Employee {
    constructor(data) {
        super(data);
        this.school = data.special;
    }
    getRole() {
        return this.role = 'Intern';
    }
};

module.exports = Intern;