const Employee = require('./employee');

class Manager extends Employee {
    constructor(data) {
        super(data);
        this.officeId = data.special;
    }
    getOfficeID() {
        return this.officeId;
    }
};

module.exports = Manager;