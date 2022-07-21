const Employee = require('./Employee');


class Intern extends Employee {
    constructor(name, ID, email, school) {
        super (name, ID, email);
        this.school = school;

        if (typeof school !== 'string' || !school.trim().length) {
            throw new Error('Expected Parameter \'school\' to be a non-empty string');
        }
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;