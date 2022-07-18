const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, ID, email, github) {
        super (name, ID, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "engineer";
    }
}

module.exports = Engineer;

/*

this extends employee

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`


















*/