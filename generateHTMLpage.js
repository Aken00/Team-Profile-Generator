const Employee = require("./lib/Employee");

// const generateHTML = (employees) => {
//     const employeeDiv = [];
//     for(let employee of employees) {
//         const divs = `<div><p>${employee.getName()}</p></div>`;
//         employeeDiv.push(div);
//     };

function generateHTML(userData) {
    console.log(typeof userData);



    function createManager(manager) {
        return `
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4></h4>
            </div>
    
            <div class="col card-header">
                <h4>Manager</h4>
            </div>
    
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">Name: ${manager.getName()}</li>
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                <li class="list-group-item"> office number: ${manager.getOfficeNum()}</li>
            </ul>
        </div>`
}

function createEngineer(engineer) {
    return `
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4></h4>
            </div>
    
            <div class="col card-header">
                <h4>Engineer</h4>
            </div>
    
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">Name: ${engineer.getName()}</li>
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                <li class="list-group-item"> gitHub: ${engineer.getGithub()}</li>
                <li class="list-group-item"> <a href = "https://www.github.com/${engineer.getGitUrl}" target= "_blank"</a></li>
            </ul>
        </div>`
}

function createIntern(intern){
    return `
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4></h4>
            </div>
    
            <div class="col card-header">
                <h4>Intern</h4>
            </div>
    
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">Name: ${intern.getName()}</li>
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: ${intern.getEmail()}</li>
                <li class="list-group-item"> school: ${intern.getSchool()}</li>
            </ul>
        </div> 
    
    </div>`
}


console.log(userData + "Look at me!");
const teamArray = []; 
console.log(userData)
teamArray.push(userData.filter(employee=>employee.getRole() === 'Manager')
.map(manager => createManager(manager))
.join(""))
teamArray.push(userData.filter(employee=>employee.getRole() === 'Manager')
.map(engineer => createEngineer(engineer))
.join(""))
teamArray.push(userData.filter(employee=>employee.getRole() === 'Manager')
.map(intern => createIntern(intern))
.join(""))

return teamArray.join("")


}


module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
        <link rel="stylesheet" type="text/css" href="./assets/style.css">
    
        
    </head>
    <body>
    
        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
            <span class="navbar-brand mb-0 h1">
                <h1>My Team</h1>
            </span>
        </nav>
    

        ${generateHTML(team)}

            <!-- Bootstrap for js -->
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"></script>
        
            <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
            crossorigin="anonymous"></script>


        </body>
        </html>`;
};
