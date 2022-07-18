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
        return "employee";
    }
}
  
module.exports = Employee;
  

/*
This is a parent class with the following properties and methods

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`*/