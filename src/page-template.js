const generateManagers = (managers) => {
    let managerTemplate = managers.map(manager => {
        return `
        <!-- Team Cards -->
        <div id="m-t" class="column">
            <div class="card">
            <div class="card-section">
                <h4><strong>${manager.name}</strong></h4>
                <p>${manager.getRole()}</p>
            </div>
            <div class="card-divider">
                <ul class="menu">
                    <li>Employee ID:<span>${manager.id}</span></li>
                    <li>Email:<span>${manager.email}</span></li>
                    <li>GitHub Username:<span>${manager.officeNumber}</span></li>
                </ul>
            </div>
            </div>
        </div>
        `;
    })
    console.log(managerTemplate);
    return managerTemplate.join("");
}

const generateEngineers = (engineers) => {
    let engineerTemplate = engineers.map(engineer => {
        return `
        <!-- Team Cards -->
        <div id="m-t" class="column">
            <div class="card">
            <div class="card-section">
                <h4><strong>${engineer.name}</strong></h4>
                <p>${engineer.getRole()}</p>
            </div>
            <div class="card-divider">
                <ul class="menu">
                    <li>Employee ID:<span>${engineer.id}</span></li>
                    <li>Email:<span>${engineer.email}</span></li>
                    <li>GitHub Username:<span>${engineer.github}</span></li>
                </ul>
            </div>
            </div>
        </div>
        `;
    })
    console.log(engineerTemplate);
    return engineerTemplate.join("");
}

const generateInterns = (interns) => {
    let internTemplate = interns.map(intern => {
        return `
        <!-- Team Cards -->
        <div id="m-t" class="column">
            <div class="card">
            <div class="card-section">
                <h4><strong>${intern.name}</strong></h4>
                <p>${intern.getRole()}</p>
            </div>
            <div class="card-divider">
                <ul class="menu">
                    <li>Employee ID:<span>${intern.id}</span></li>
                    <li>Email:<span>${intern.email}</span></li>
                    <li>GitHub Username:<span>${intern.school}</span></li>
                </ul>
            </div>
            </div>
        </div>
        `;
    })
    console.log(internTamplate);
    return internTemplate.join("");
}

const generateHtml = (managers, engineers, interns) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Compressed Foundation CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/css/foundation.min.css" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>
    <body>
        
        <!-- Generate The Page  -->
        <header>
    
        </header>
    
        <main>
            ${generateManagers(managers)}
            ${generateEngineers(engineers)}
            ${generateInterns(interns)}
        </main>
    
    <!-- Compressed Foundation JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/js/foundation.min.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}

module.exports = generateHtml;