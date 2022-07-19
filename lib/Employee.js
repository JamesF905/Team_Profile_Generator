class Employee {
    constructor(name, ID, email){
        this.name = name;
        this.id = ID;
        this.email = email;
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