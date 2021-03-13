/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)

The styling in the image is just an example, so feel free to add your own.

## Getting Started

This homework will combine many of the skills we've covered so far. In addition to the User Story and Acceptance Criteria, we’ve provided some guidelines to help get started.

Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

It is recommended that you start with a directory structure that looks like the following example:

```md
__tests__/			// jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/               // rendered output (HTML) and CSS style sheet
lib/				// classes
src/				// template helper code
index.js			// runs the application
```

The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:
* `name`
* `id`
* `email`
* `getName()`
* `getId()`
* `getEmail()`
* `getRole()`&mdash;returns `'Employee'`
*/

const inquirer = require('inquirer');
//const Intern = require('./lib/intern');

let team = [];
//const Employee = require('./lib/employee')
//const ManagerBig = require('./lib/manager');
//const Engineer = require('./lib/engineer');
//const Intern = require('./lib/intern');
/*
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName();
    getID();
    getEmail();
    getRole();//-- returns 'Employee';
};



The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:
* `officeNumber`
* `getRole()`&mdash;overridden to return `'Manager'`


class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole();//-overrident to return 'Manager';
};

/*
In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
* `github`&mdash;GitHub username
* `getGithub()`
* `getRole()`&mdash;overridden to return `'Engineer'`


class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = gitHub;
    };
    getGitHub();
    getRole();//--overriden to return 'Engineer';
};
/*

In addition to `Employee`'s properties and methods, `Intern` will also have the following:
* `school`
* `getSchool()`
* `getRole()`&mdash;overridden to return `'Intern'`

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    };
    getSchool();
    getRole(); //--overridden to return Intern

};

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
*/

//Psuedo Code:

//Declare Dependencies


//Data Processed
//---cycling through options until program is done

//build site

const engineerQuestions = [
    { type: 'input', message: "What is the engineer's name?", name: 'engineerName', },
    { type: 'input', message: "What is the employee ID?", name: 'engineerId', },
    { type: 'input', message: "What is the email address?", name: 'engineerEmail', },
    { type: 'input', message: "What is the GitHub username?", name: 'engineerGitId', },
];
const internQuestions = [
    { type: 'input', message: "What is the intern's name?", name: 'internName', },
    { type: 'input', message: "What is the employee ID?", name: 'internId', },
    { type: 'input', message: "What is the email address?", name: 'internEmail', },
    { type: 'input', message: "What is school they are attending?", name: 'internSchoId', },
];
const teamManagerQuestions = [
    { type: 'input', message: "What is your name?", name: 'managerName', },
    { type: 'input', message: "What is your employee ID?", name: 'managerId', },
    { type: 'input', message: "What is your email address?", name: 'managerEmail', },
    { type: 'input', message: "What is your office number?", name: 'managerOfficeId', },
];
const startStopQuestions = [
    { type: 'list', message: 'Choose an option:', choices: ['Add an engineer', 'Add an intern', 'Finish buildling the team'], name: 'startStop', },
];

//constructor for base employee information that is used for other piggybacking consructors tha add role specific info

class Manager {
    constructor(data) {
        this.name = data.managerName;
        this.id = data.managerId;
        this.email = data.managerEmail;
        this.officeID = data.managerOfficeId;
    };
};

class Engineer {
    constructor(data) {
        this.name = data.engineerName;
        this.id = data.engineerId;
        this.email = data.engineerEmail;
        this.gitHubUser = data.engineerGitId;
    };

};

class Intern {
    constructor(data) {
        this.name = data.internName;
        this.id = data.internId;
        this.email = data.internEmail;
        this.school = data.internSchoId;
    };
};

//LOGIC


function init() {
    inquirer
        .prompt(teamManagerQuestions)
        .then(answer => {
            let teamManager = new Manager(answer);
            team.push(teamManager);
            console.log(team);
            askAgain();
        });
};

function internQuest() {
    inquirer
        .prompt(internQuestions)
        .then(answer => {
            let intern = new Intern(answer)
            team.push(intern);
            console.log(team);
            askAgain();
        });
};

function engineerQuest() {
    inquirer
        .prompt(engineerQuestions)
        .then(answer => {
            let engineer = new Engineer(answer)
            team.push(engineer);
            console.log(team);
            askAgain();
        })
}

function askAgain() {
    inquirer
        .prompt(startStopQuestions)
        .then(answer => {
            if (answer.startStop == 'Add an intern') {
                internQuest();
                console.log('intern');
            } else if (answer.startStop == 'Add an engineer') {
                engineerQuest()
                console.log('engineer');
            } else console.log('Stop');

        });
};

function buildTheSite() {

}

init();

/*

use inquirer to prompt user to first answer questions about the manager
then
>>>>>>>>>>------- Start Loop: ------<<<<<<<<<
use inquirer to prompt the user to startStop
if
Add engineer is selected
then prompt enineer questions
store in unique variable (maybe push to an array)
loop restarts - Exit

else if
Add intner is selected
then prompt intern questions
store in unique variable (maybe an array of objects)
loop restarts - Exit

else
>>>>>>----- then the loop ends -----<<<<<<<<<

the web page is built with the data received

*/