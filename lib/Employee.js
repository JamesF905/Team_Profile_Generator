class Employee {
    constructor(name, ID, email){
        this.name = name;
        this.id = ID;
        this.email = email;

        if (typeof ID !== 'number') {
            throw new Error('Expected Parameter \'ID\' to be a number');
        }
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error('Expected Parameter \'name\' to be a non-empty string');
        }
        if (typeof email !== 'string' || !email.trim().length) {
            throw new Error('Expected Parameter \'email\' to be a non-empty string');
        }
    }
  
    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
        //return this.constructor.name;
    }
}  
module.exports = Employee;