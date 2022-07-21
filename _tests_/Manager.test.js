const Manager = require("../lib/Manager.js");
describe('Manager', () => {
  describe("Make new Object", () => {
    it('Should create an object with id, name, and email parameters as well as methods get(id), get(name), get(email)', () => {
      const guy = new Manager('James', 1, 'james@gmail.com', 1);
      expect(guy.name).toEqual('James');
      expect(guy.id).toEqual(1);
      expect(guy.email).toEqual('james@gmail.com');
      expect(guy.officeNumber).toEqual(1);
    });

    it ('Throw an error if missing the officeNumber parameter', () => { 
        const throwCheck = () => new Manager('James', 1, 'james@gmail.com');

        expect(throwCheck).toThrow();
    });    

    it ('Throw an error if "officeNumber" is an incorrect type', () => { 
      const throwCheck = () => new Manager('James', 1, 'james@gmail.com', "yo");

      expect(throwCheck).toThrow();
    });
  });

  describe("getOfficenumber", () => {
    it ('Must return the "officeNumber" variable of the object', () => {
      const james = new Manager('James', 1, 'james@gmail.com', 1);
      expect(james.getOfficenumber()).toEqual(1);
    });
  });

  describe("getRole", () => {
    it ('Must return the "Role" variable of the object', () => {
      const james = new Manager('James', 1, 'james@gmail.com', 1);
      expect(james.getRole()).toEqual('Manager');
    });
  });
  
});