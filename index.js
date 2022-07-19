const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let objects_array = [];

function compile_objects(run_type){
  let grammah, unique_input, unique_message, roll = '';

  if (run_type === "Start"){
    roll = "Manager";
    grammah = "your"
    unique_input = "Office_Number";
  }else{
    grammah = "their";
    if(run_type === "Add an Engineer") {
      roll == "Engineer";
      unique_input = "GitHub_Username";
    }
    if(run_type === "Add an Intern"){
      roll == "Intern";
      unique_input = "School";
    }
  }
  
  unique_message = `Enter ${grammah} ${unique_input.replace("_", " ")}`;

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
        name: `${unique_input}`,
        message: `${unique_message}`,
      },         
    ])
    .then((data) => {
      let new_Obj = (
        roll === "Manager" ? new Manager(data.name, data.employee_ID, data.email_address, Object.values(data)[3]):
        roll === "Engineer" ? new Engineer(data.name, data.employee_ID, data.email_address, Object.values(data)[3]):
        roll === "Intern" ? new Intern(data.name, data.employee_ID, data.email_address, Object.values(data)[3]):
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
          console.log(objects_array);
          objects_array = [];
        }
      })
    })

  }
    compile_objects("Start");