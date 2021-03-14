const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const { UV_FS_O_FILEMAP } = require('constants');
let counter = 0;

const managerQuestions = [
    { type: 'input', message: "What is your name?", name: 'name', },
    { type: 'input', message: "What is your employee ID?", name: 'id', },
    { type: 'input', message: "What is your email address?", name: 'email', },
    { type: 'input', message: "What is your office number?", name: 'special', },
];

const startStopQuestions = [
    { type: 'list', message: 'Choose an option:', choices: ['Add an engineer', 'Add an intern', 'Finish buildling the team'], name: 'startStop', },
];


//this function initalizes the application by collecting the managers information, creates a new Team Manager from the manager class and then calls the startHTML function to write the initial data. this function will be called once.
function init() {
    inquirer
        .prompt(managerQuestions)
        .then(answer => {
            let teamManager = new Manager(answer);
            teamManager.getOfficeID(answer);
            console.log(teamManager, typeof teamManager);
            startHTML(teamManager);
        })
};

//This function takes in the teamManager data and adds it into the template literal and writes the new HTML file. this function will be called once and when complete will call the askAgain function.
function startHTML(teamManager) {
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
                        <h5 class="card-title">${teamManager.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Employee ID: ${teamManager.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${teamManager.email}">${teamManager.email}</a></li>
                            <li class="list-group-item">Office ID: ${teamManager.officeId}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <h2> </h2>
            </div>
        </div>`;

    fs.writeFile('test.html', htmlTemplate, (err) =>
        err ? console.log(err) : console.log('Success!'));

    askAgain();
};

//This function asks a set of questions that determines whether the user wants to add a new engineer, intern, or is finished buildling their team.
function askAgain() {
    inquirer
        .prompt(startStopQuestions)
        .then(answer => {
            const engineerQuest = "What is the GitHub username?";
            const internQuest = "What is school they are attending?";
            if (answer.startStop == 'Add an intern') {
                questEverything(internQuest, 'intern');
            } else if (answer.startStop == 'Add an engineer') {
                questEverything(engineerQuest, 'engineer');
            } else if (answer.startStop == 'Finish buildling the team') {
                stopHTML();
            }
        })
};

//This function asks a set of questions based on the role type selected in the askAgain function and then builds the new employee from the extended class, builds the HTML and calls the appendsHTML function and then calls the askAgain function.
function questEverything(question, role) {
    const questions = [
        { type: 'input', message: "What is your name?", name: 'name', },
        { type: 'input', message: "What is your employee ID?", name: 'id', },
        { type: 'input', message: "What is your email address?", name: 'email', },
        { type: 'input', message: `${question}`, name: 'special', },
    ];

    inquirer
        .prompt(questions)
        .then(answer => {
            if (role === 'intern') {
                let newIntern = new Intern(answer);
                newIntern.getRole();
                let updateHTML = `<div class="col-sm-4">
<div class="card">
<div class="card-body">
<h5 class="card-title">${newIntern.name}</h5>
<h6 class="card-subtitle mb-2 text-muted">${newIntern.role}</h6>
<ul class="list-group list-group-flush">
    <li class="list-group-item">Employee ID: ${newIntern.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${newIntern.email}">${newIntern.email}</a></li>
    <li class="list-group-item">School: ${newIntern.school}</li>
</ul>
</div>
</div>
</div>`
                appendHTML(updateHTML, 1);
                askAgain();

            } if (role === 'engineer') {
                let newEngineer = new Engineer(answer);
                newEngineer.getRole();

                let updateHTML = `<div class="col-sm-4">
<div class="card">
<div class="card-body">
<h5 class="card-title">${newEngineer.name}</h5>
<h6 class="card-subtitle mb-2 text-muted">${newEngineer.role}</h6>
<ul class="list-group list-group-flush">
    <li class="list-group-item">Employee ID: ${newEngineer.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${newEngineer.email}">${newEngineer.email}</a></li>
    <li class="list-group-item">GitHub URL: <a href="https://www.github.com/${newEngineer.gitHub}" target="_blank">${newEngineer.gitHub}</a></li>
</ul>
</div>
</div>
</div>`
                appendHTML(updateHTML, 1);
                askAgain();
            }
        })
};

//This function takes in the HTML built from the questEverything function and adds the new information the HTML file. no functions are called from this function.
function appendHTML(data, index) {
    if (counter === 3) {
        const endNewRow = `</div>
        <div class="row">
            <div class="col-sm-12">
                <h2> </h2>
            </div>
        </div>`;
        fs.appendFile('test.html', endNewRow, (err) =>
            err ? console.log(err) : console.log('Success!'));
        counter = 0;
    } if (counter === 0) {
        const newRow = `<div class="row">`
        fs.appendFile('test.html', newRow, (err) =>
            err ? console.log(err) : console.log('Success!'));
    };

    counter = counter + index;

    fs.appendFile('test.html', data, (err) =>
        err ? console.log(err) : console.log('Success!'));
};

//This function is called when the user selects the option to finish building the team. once called it adds the last bit of HTML to our HTML file.
function stopHTML() {
    let data = `</div>
        </div>
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
            crossorigin="anonymous"></script>
            <script src="script.js"></script>
        </body>
        </html>`
    fs.appendFile('test.html', data, (err) =>
        err ? console.log(err) : console.log('Success!'));
    return;
};

init();