const Engineer = require("../lib/Engineer.js");
describe('Engineer', () => {
  describe("Make new Object", () => {
    it('Should create an object with id, name, and email parameters as well as methods get(id), get(name), get(email)', () => {
      const guy = new Engineer('James', 1, 'james@gmail.com', 'JamesF905');
      expect(guy.name).toEqual('James');
      expect(guy.id).toEqual(1);
      expect(guy.email).toEqual('james@gmail.com');
      expect(guy.github).toEqual('JamesF905');
    });

    it ('Throw an error if missing the github parameter', () => { 
        const throwCheck = () => new Engineer('James', 1, 'james@gmail.com');

        expect(throwCheck).toThrow();
    });    

    it ('Throw an error if "github" is an incorrect type', () => { 
      const throwCheck = () => new Engineer('James', 1, 'james@gmail.com', 1);

      expect(throwCheck).toThrow();
    });
  });

  describe("getGithub", () => {
    it ('Must return the "github" variable of the object', () => {
      const james = new Engineer('James', 1, 'james@gmail.com', 'JamesF905');
      expect(james.getGithub()).toEqual('JamesF905');
    });
  });

  describe("getRole", () => {
    it ('Must return the "Role" variable of the object', () => {
      const james = new Engineer('James', 1, 'james@gmail.com', 'JamesF905');
      expect(james.getRole()).toEqual('Engineer');
    });
  });
  
});