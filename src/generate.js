const internTemplate = (internData) => {
    const { name, id, email, role, school } = internData;

    const template = `
    <div class="card">
        <header>
        	<h2 class="name header">${name}</h2>
            <h3 class="role header">${role}</h3>
        </header>
        <p class="details">Employee ID: ${id}</p>
        <p class="details">Email: <a href="mailto:">${email}</a></p>
        <p class="details">School: ${school}</p>
    </div>`

    return template;
}

const engineerTemplate = (engineerData) => {
    const { name, id, email, role, github } = engineerData;

    const template = `
    <div class="card">
        <header>
            <h2 class="name header">${name}</h2>
            <h3 class="role header">${role}</h3>
        </header>
        <p class="details">Employee ID: ${id}</p>
        <p class="details">Email: <a href="mailto:">${email}</a></p>
        <p class="details">Github: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
    </div>`

    return template;
}


const managerTemplate = (managerData) => {
    const { name, id, email, role, officeNumber } = managerData;

    const template = `
    <div class="card">
        <header>
            <h2 class="name header">${name}</h2>
            <h3 class="role header">${role}</h3>
        </header>
        <p class="details">Employee ID: ${id}</p>
        <p class="details">Email: <a href="mailto:">${email}</a></p>
        <p class="details">Office Number: ${officeNumber}</p>
    </div>`

    return template;
}

const createHTML = (employeeData) => {
    let employeeHTML = ""

    for (let i = 0; i < employeeData.length; i++) {
        switch (employeeData[i].getRole()) {
            case "manager":
                employeeHTML += managerTemplate(employeeData[i])
                break;
            case "engineer":
                employeeHTML += engineerTemplate(employeeData[i])
                break;

            case "intern":
                employeeHTML += internTemplate(employeeData[i])
                break;
        }
    }

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <h1 class="header">My Team</h1>
        </header>
    
        <main>
            <div class="container">
                ${employeeHTML}                
            </div>
        </main>
        
    </body>
    </html>`
}

module.exports = createHTML;
