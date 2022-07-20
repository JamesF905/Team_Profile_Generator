const inquirer = require('inquirer');
const fs = require('fs');
const compileHTML = require('./src/generate');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let objects_array = [];

function compile_objects(run_type){
  let grammah, unique_input, unique_message, roll = '';

  if (run_type === "Start"){
    grammah = "your";
    roll = "Manager";
    unique_input = "Office Number";
  }else{
    grammah = "their";
    if(run_type === "Add an Engineer") {
      roll = "Engineer";
      unique_input = "GitHub Username";
    }
    if(run_type === "Add an Intern"){
      roll = "Intern";
      unique_input = "School";
    }
  }
  
  unique_message = `Enter ${grammah} ${unique_input}`;

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is ${grammah} name?`,
      },
      {
        type: 'input',
        name: 'employee_ID',
        message: `Please enter ${grammah} Employee ID.`,
      },
      {
        type: 'input',
        name: 'email_address',
        message: `Enter ${grammah} email address.`,
      },
      {
        type: 'input',
        name: 'unique',
        message: `${unique_message}`,
      },         
    ])
    .then((data) => {
      let new_Obj = (
        roll === "Manager" ? new Manager(data.name, data.employee_ID, data.email_address, data.unique):
        roll === "Engineer" ? new Engineer(data.name, data.employee_ID, data.email_address, data.unique):
        roll === "Intern" ? new Intern(data.name, data.employee_ID, data.email_address, data.unique):
        null 
      );
      objects_array.push(new_Obj);
      

      inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ['Add an Engineer', 'Add an Intern', 'Finish Building my Team'],
      }).then(menu => {
        if (menu.choice !== "Finish Building my Team") {
          compile_objects(menu.choice);
        }else{
          compileHTML(objects_array);

          objects_array = [];
        }
      })
    })

  }
    compile_objects("Start");

/*
fs.readFile('data.csv', 'utf8', (error, data) =>
error ? console.error(error) : console.log(data)
);*/

/*
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // Ternary operator takes in a condition followed by a question mark (?)
  // then an expression to execute if the condition is truthy followed by a colon (:)
  // and finally the expression to execute if the condition is falsy.
  // This operator is frequently used as a shortcut for the if statement.
  err ? console.error(err) : console.log('Commit logged!')*/
/*
fs.writeFile('readme.md', readme_string, (err) =>
    err ? console.error(err) : console.log('Success!')
);*/