const Employee = require('./employee');

class Manager extends Employee {
    constructor(data) {
        super(data);
        this.officeId = data.special;
    }
};

module.exports = Manager;