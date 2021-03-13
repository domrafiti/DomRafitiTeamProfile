const inquirer = require('inquirer');
const fs = require('fs');
let team = [];
let htmlTemplate = `<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

    <title>Team Builder</title>
</head>
<body>
    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">
                    <h1>My Team</h1>
                </span>
            </div>
        </nav>
    </header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Employee ID: ${this.id}</li>
                            <li class="list-group-item">Email: ${this.email}</li>
                            <li class="list-group-item">Office ID: ${this.officeID}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <h2> </h2>
            </div>
        </div>
        <div id="start-here" class="row">
            
        </div>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
            crossorigin="anonymous"></script>
        <script src="./script.js"></script>
</body>
</html>`


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

const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function init() {
    inquirer
        .prompt(teamManagerQuestions)
        .then(answer => {
            let teamManager = new Manager(answer);
            team.push(teamManager);
            console.log(team, team.length);
            askAgain();

            fs.writeFile('test.html')
        });
};

function internQuest() {
    inquirer
        .prompt(internQuestions)
        .then(answer => {
            let intern = new Intern(answer);
            team.push(intern);
            console.log(team, team.length);
            askAgain();
        });
};

function engineerQuest() {
    inquirer
        .prompt(engineerQuestions)
        .then(answer => {
            let engineer = new Engineer(answer);
            team.push(engineer);
            console.log(team, team.length);
            askAgain();
        });
};

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
            } else if (answer.startStop == 'Finish buildling the team') {
                buildTheSite();
                console.log('Stop');
            }

        });
};

function buildTheSite() {

    if (inRange(team.length, 1, 3)) {
        console.log('yay 1-3');





    }
    if (inRange(team.length, 4, 6)) {
        console.log('yay 4-6');
    }
    if (inRange(team.length, 7, 9)) {
        console.log('yay 7-9');
    }
}

init();
