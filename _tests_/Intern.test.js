const Intern = require("../lib/Intern.js");
describe('Intern', () => {
  describe("Make new Object", () => {
    it('Should create an object with id, name, and email parameters as well as methods get(id), get(name), get(email)', () => {
      const guy = new Intern('James', 1, 'james@gmail.com', 'JamesF905');
      expect(guy.name).toEqual('James');
      expect(guy.id).toEqual(1);
      expect(guy.email).toEqual('james@gmail.com');
      expect(guy.school).toEqual('JamesF905');
    });

    it ('Throw an error if missing the school parameter', () => { 
        const throwCheck = () => new Intern('James', 1, 'james@gmail.com');

        expect(throwCheck).toThrow();
    });    

    it ('Throw an error if "school" is an incorrect type', () => { 
      const throwCheck = () => new Intern('James', 1, 'james@gmail.com', 1);

      expect(throwCheck).toThrow();
    });
  });

  describe("getSchool", () => {
    it ('Must return the "school" variable of the object', () => {
      const james = new Intern('James', 1, 'james@gmail.com', 'JamesF905');
      expect(james.getSchool()).toEqual('JamesF905');
    });
  });

  describe("getRole", () => {
    it ('Must return the "Role" variable of the object', () => {
      const james = new Intern('James', 1, 'james@gmail.com', 'JamesF905');
      expect(james.getRole()).toEqual('Intern');
    });
  });
  
});