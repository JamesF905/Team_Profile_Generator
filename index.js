const inquirer = require('inquirer');
const fs = require('fs');

let objects_array = [];

function compile_objects(run_type){
  let grammah, unique_input, unique_message = '';

  if (run_type === "Start"){
    grammah = "your"
    unique_input = "office_number";
  }else{
    grammah = "their";
    if(run_type === "Add an Engineer") unique_input = "gitHub_username";
    if(run_type === "Add an Intern") unique_input = "school";
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
      objects_array.push(data);
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






















/*
function compile_objects(run_type, data){
  if (run_type === "Start"){
    grammah = "your";
  }else{
    grammah = "their";
  }

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is ${grammah} name?`,
      },
      {
        type: 'input',
        name: 'employee ID',
        message: `Please enter ${grammah} Employee ID.`,
      },
      {
        type: 'input',
        name: 'email_address',
        message: `Enter ${grammah} email address.`,
      },
      {
        type: 'input',
        name: 'office_number',
        message: 'Enter your office number.',
      },
      {
        type: 'input',
        name: 'office_number',
        message: 'Enter your office number.',
      },
      {
        type: 'input',
        name: 'office_number',
        message: 'Enter your office number.',
      },
    ])
    .then((data) => {
      
    })
    .then((data) => {
      inquirer
      .prompt([{
        type: 'list',
        message: 'What would you like to do?',
        name: 'type_of_employee',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish Building my Team'],
      },
    ])

      fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
      );

    })
    
    
    


}

compile_objects(start);*/


/*
  function positionPrompt(data) {
    inquirer.prompt({
        type: "input",
        name: "userInput",
        message: "Please enter the ticker and amount, separated by a comma and space (AAPL, 30"
    }).then(res => {
        userInputArr = res.userInput.split(", ");
        data.addToPosition(userInputArr[0], parseInt(userInputArr[1]));
        console.log(data);
        return data
    }).then(data => {
        inquirer.prompt({
            type: "confirm",
            name: "addAgain",
            message: "Would you like to add again?"
        }).then(userInput => {
            if (userInput.addAgain) {
                positionPrompt(data);
            }
        })
    })
}*/