const inquirer = require('inquirer');
//const fs = require('fs');
//const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

promptUser().then(answers => console.log(answers));





//const fs = require('fs');
//const generatePage = require('./src/page-template');
//
//const pageHTML = generatePage(name, github);
//
//
//fs.writeFile('./index.html', pageHTML, err => {
//    if (err) throw err;
//
//    console.log('Portfolio complete! Check out index.html to see the output!');
//});




//const printProfileData = profileDataArr => {
//    this
//    for (let i = 0; i < profileDataArr.length; i += 1) {
//    console.log(profileDataArr[i]);
//    }

 //   console.log('============');

//    is the same as this...
//    profileDataArr.forEach(profileItem => console.log(profileItem));
//};

//printProfileData(profileDataArgs);