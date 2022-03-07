const generateManager = (manager) => {
        return `
        <!-- Team Cards -->
        <div id="m-t" class="column">
            <div class="card">
            <div class="card-section">
                <h4><strong>${manager.name}</strong></h4>
                <p>${manager.getRole()}</p>
                <span class="iconify" data-icon="mdi:coffee"></span>
            </div>
            <div class="card-divider">
                <ul class="vertical menu align-left">
                    <li>Employee ID:<span>${manager.id}</span></li>
                    <li>Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li>Office Number:<span>${manager.officeNumber()}</span></li>
                </ul>
            </div>
            </div>
        </div>
        `;
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
                <span class="iconify" data-icon="mdi:glasses"></span>
            </div>
            <div class="card-divider">
                <ul class="vertical menu align-left">
                    <li>Employee ID:<span>${engineer.id}</span></li>
                    <li>Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li>GitHub Username:<a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
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
                <span class="iconify" data-icon="mdi:school"></span>
            </div>
            <div class="card-divider">
                <ul class="vertical menu align-left">
                    <li>Employee ID:<span>${intern.id}</span></li>
                    <li>Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li>School:<span>${intern.school}</span></li>
                </ul>
            </div>
            </div>
        </div>
        `;
    })
    console.log(internTemplate);
    return internTemplate.join("");
}

const generateHtml = (manager, engineers, interns) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Compressed Foundation CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/css/foundation.min.css" crossorigin="anonymous">
        <!-- Iconify -->
        <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
        <!-- Personal Stylesheet -->
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>
    <body>
        
        <!-- Generate The Page  -->
        <header>
            <h1>My Team</h1>
        </header>
    
        <main>
            ${generateManager(manager)}
            ${generateEngineers(engineers)}
            ${generateInterns(interns)}
        </main>
    
    <!-- Compressed Foundation JavaScript -->
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/js/foundation.min.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}

module.exports = generateHtml;