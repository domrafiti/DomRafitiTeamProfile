class Employee {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.email = data.email;
    };

    getName() {
        return this.name;
    };
    getID() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };

}

module.exports = Employee;