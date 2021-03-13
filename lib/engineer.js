class Engineer extends Employee {
    constructor(gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    };
    getGitHub() {
        return this.gitHub;
    };
    getRole() {
        return 'Engineer';
    };//--overriden to return 'Engineer';
};

module.exports = Engineer;