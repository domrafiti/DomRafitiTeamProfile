const Employee = require('./employee');

class Engineer extends Employee {
    constructor(data) {
        super(data);
        this.gitHub = data.special;
    }
    getRole() {
        return this.role = 'Engineer';
    }
}

module.exports = Engineer;