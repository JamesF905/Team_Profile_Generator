const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        super (name, ID, email);
        this.officeNumber = officeNumber;

        if (typeof officeNumber !== 'number') {
            throw new Error('Expected Parameter \'officeNumber\' to be a number');
        }
    }

    getOfficenumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;