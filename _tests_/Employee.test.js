const Employee = require("../lib/Employee.js");
describe('Employee', () => {
  describe("Make new Object", () => {
    it('Should create an object with id, name, and email parameters as well as methods get(id), get(name), get(email)', () => {
      const guy = new Employee('James', 1, 'james@gmail.com');
      expect(guy.name).toEqual('James');
      expect(guy.id).toEqual(1);
      expect(guy.email).toEqual('james@gmail.com');
    });

    it ('Throw an error if missing any parameters', () => { 
      const throwCheck = () => new Employee();

      expect(throwCheck).toThrow();
    });

    it ('Throw an error if missing the id parameter', () => { 
        const throwCheck = () => new Employee('James', 'james@gmail.com');

        expect(throwCheck).toThrow();
    });

    it ('Throw an error if missing the name parameter', () => { 
        const throwCheck = () => new Employee(1, 'james@gmail.com');

        expect(throwCheck).toThrow();
    });

    it ('Throw an error if missing the email parameter', () => { 
        const throwCheck = () => new Employee('James', 1);

        expect(throwCheck).toThrow();
    });

    it ('Throw an error if "id" is an incorrect type', () => { // email wrong type
      const throwCheck = () => new Employee('James', "1", 'james@gmail.com');

      expect(throwCheck).toThrow();
    });

    it ('Throw an error if "name" is an incorrect type', () => { // email wrong type
      const throwCheck = () => new Employee(1, 1, 'james@gmail.com');

      expect(throwCheck).toThrow();
    });

    it ('Throw an error if "email" is an incorrect type', () => { // email wrong type
      const throwCheck = () => new Employee('James', 1, false);

      expect(throwCheck).toThrow();
    });
  });

  describe("getId", () => {
    it ('Must return the "id" variable of the object', () => {
      const james = new Employee('James', 1, 'james@gmail.com');
      expect(james.getId()).toEqual(1);
    });
  });

  describe("getName", () => {
    it ('Must return the "Name" variable of the object', () => {
      const james = new Employee('James', 1, 'james@gmail.com');
      expect(james.getName()).toEqual('James');
    });
  });

  describe("getEmail", () => {
    it ('Must return the "Email" variable of the object', () => {
      const james = new Employee('James', 1, 'james@gmail.com');
      expect(james.getEmail()).toEqual('james@gmail.com');
    });
  });

  describe("getRole", () => {
    it ('Must return the "Role" variable of the object', () => {
      const james = new Employee('James', 1, 'james@gmail.com');
      expect(james.getRole()).toEqual('Employee');
    });
  });
  
});
