class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    };//-overrident to return 'Manager';
};

module.exports = Manager;