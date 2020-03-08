const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
const staffArr = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const managerQ = [
    {
        type: "input",
        name: "name",
        message: "What is your manager's name?"

    },
    
    {
        type: "input",
        name: "empolyeeID",
        message: "What is this manager's Employee ID?"

    },
    
    {
        type: "input",
        name: "email",
        message: "What is this manager's email?"

    },
    
    {
        type: "input",
        name: "officeNumber",
        message: "What is this manager's office number?"

    },

    {
        type: "confirm",
        name: "moreEmployees",
        message: "Do you want to add more employees?"
    }


];

const employeeQ = [
    {
        type: "list",
        name: "employeeRole",
        message: "What role does this employee take in your company?",
        choices: ["Engineer", "Intern"]
    },
]

const engineerQ = [
    {
        type: "input",
        name: "name",
        message: "What is this employee's name?"

    },
    
    {
        type: "input",
        name: "empolyeeID",
        message: "What is this employee's Employee ID?"

    },
    
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"

    },

    {
        type: "input",
        name: "gitHub",
        message: "What is this employee's github account name?"
    },

    {
        type: "confirm",
        name: "moreEmployees",
        message: "Do you want to add more employees?"
    }
];

const internQ = [
    {
        type: "input",
        name: "name",
        message: "What is this employee's name?"

    },
    
    {
        type: "input",
        name: "empolyeeID",
        message: "What is this employee's Employee ID?"

    },
    
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"

    },

    {
        type: "input",
        name: "school",
        message: "Where is this employee's goingto school?"
    },
    
    {
        type: "confirm",
        name: "moreEmployees",
        message: "Do you want to add more employees?"
    }
];

function managerInfo() {
    inquirer.prompt(managerQ).then(function(data){
        const manager = new Manager(data.name, data.employeeID, data.email, data.officeNumber);

        staffArr.push(manager);
        moreEmployees(data);
    });
}

function moreEmployees(data){
    inquirer.prompt(employeeQ).then(function(data){
        if(data.choices === "Engineer") {
            newEngineer();
        } else if(data.choices === "Intern"){
            newIntern();
        } else {
            console.log("Thank you for using our Employee Management Software. We are now populating your unique website with all the gathered employee information.");

            outputStaff();
        }
    });
}

function newEngineer() {
    inquirer.prompt(engineerQ).then(function(data){
        const engineer = new Engineer(data.name, data.employeeID, data.email, data.gitHub);

        staffArr.push(engineer);
        moreEmployees(data);
    });
}
function newIntern() {
    inquirer.prompt(internQ).then(function(data){
        const engineer = new Intern(data.name, data.employeeID, data.email, data.school);

        staffArr.push(intern);
        moreEmployees(data);
    });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function outputStaff() {
    const htmlBlock = render(staffArr);    ​
    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.
    // Hint: you may need to check if the `output` folder exists and create it if it
    // does not.

    fs.writeFile(outputPath, htmlBlock, function(err){
        if(err) {
            throw err;
        }

        console.log("Task complete.")
    });
    ​
}

managerInfo();
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Inter classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ``