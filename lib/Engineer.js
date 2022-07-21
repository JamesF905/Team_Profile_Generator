const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, ID, email, github) {
        super (name, ID, email);
        this.github = github;

        if (typeof github !== 'string' || !github.trim().length) {
            throw new Error('Expected Parameter \'github\' to be a non-empty string');
        }
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;