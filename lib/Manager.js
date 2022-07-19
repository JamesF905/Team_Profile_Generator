const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        super (name, ID, email);
        this.officeNumber = officeNumber;
    }

    getOfficenumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;

/* 
this extends employeee

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

*/