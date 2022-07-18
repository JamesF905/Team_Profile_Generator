const Employee = require('./Employee.js');


class Intern extends Employee {
    constructor(name, ID, email, school) {
        super (name, ID, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;




/*

this extends employee




* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`














*/