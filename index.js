// Include packages for application
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/page-template');

let manager = {};
let engineerArr = [];
let internArr = [];

// Questions for User Input to Generate Team
const teamGeneratorQuestions = () => {
    console.log(`
    =================
    Generate a New Team
    =================
    `);

    return inquirer
    .prompt([
        //Begin This Application, or not 
        {
            type: 'input',
            name: 'begin',
            message: 'Please hit "RETURN/ENTER" to generate an Employee team. If you wish to exit please hit "Ctrl+C".',
        },
        // 1
        // a) team managers name
        {
            type: 'input',
            name: 'manager',
            message: 'What is the name of the team manager? OR What is your name?',
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your team manager!');
                    return false;
                }
            }
        },
        // b) employee ID
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your employee ID?',
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        // c) email address
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the name of the team managers email?',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        // d) office number
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        }

        // 3
        // when done building team
        // I exit the application and the HTML is generated
    ])
    .then(answers => {
        // create manager from class constructor, and call exit function
        manager = new Manager(answers.manager, answers.managerId, answers.managerEmail, answers.officeNumber);
        leavePrompt();
    })
};

// a) user selects engineer option:
const engineerQuestions = () => {
    inquirer.prompt([
        // engineers name
        {
            type: 'input',
            name: 'engineer',
            message: 'What is the name of the teams engineer?',
            validate: engineerInput => {
                if (engineerInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer!');
                    return false;
                }
            }
        },
        // employee ID
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the employee ID of the engineer?',
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the engineer!');
                    return false;
                }
            }
        },
        // email address
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email address of the engineer?',
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the engineer!');
                    return false;
                }
            }
        },
        // GitHub username
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the GitHub Username of the engineer?',
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log('Please enter the GitHub Username of the engineer!');
                    return false;
                }
            }
        }
        // take back to main menu
    ])
    .then(answers => {
        let engineer = new Engineer(answers.engineer, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        engineerArr.push(engineer);
        leavePrompt();
    })
};

// b) user selects intern option
const internQuestions = () => {
    inquirer.prompt([
        // interns name
        {
            type: 'input',
            name: 'intern',
            message: 'What is the name of the teams intern?',
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }
            }
        },
        // employee ID
        {
            type: 'input',
            name: 'internId',
            message: 'What is the employee ID of the intern?',
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the intern!');
                    return false;
                }
            }
        },
        // email address
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the email address of the intern?',
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the intern!');
                    return false;
                }
            }
        },
        // School name
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school did the intern attend?',
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log('Please provide the School name!');
                    return false;
                }
            }
        },
        // take back to main menu
        ])
        .then(answers => {
            let intern = new Intern(answers.intern, answers.internId, answers.internEmail, answers.internSchool);
            internArr.push(intern);
            leavePrompt();
        })
}

// Exit function
const leavePrompt = () => {
    inquirer.prompt([
        // 2
        // options to add an engineer OR an intern OR exit
        {
            type: 'list',
            name: 'addition',
            message: 'Would you like to add an engineer or an intern?',
            choices: [ 'Engineer', 'Intern', 'Exit' ]
        }
    ])
    .then(answers => {
        console.log(answers.addition);
        if (answers.addition === 'Engineer') {
            engineerQuestions();
        } else if (answers.addition === 'Intern') {
            internQuestions();
        } else {
            //console.log(manager, engineerArr, internArr);
            fs.writeFile('./dist/index.html', generateHtml(manager, engineerArr, internArr), err => {
                if (err) throw new Error(err);

            console.log('Website created! Open index.html file in your browser to see!');
            });
            return;
        }
    })
}

//
teamGeneratorQuestions()
    // .then(teamData => {

  
    // })
// on the html page
// 1
// when clicking an email address then default email program opens (outlook, mail, etc.) 
// and the email has to pupolate in the TO: field the email address that was clicked 
// 2
// when clicking the HitHub username the profile opens in a new tab

//TESTS
// const fs = require('fs');
// jest.mock('fs');
// fs.readFileSync.mockReturnValue('fake content');