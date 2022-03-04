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
           ${generateEngineers(engineers)}
        </main>
    
    <!-- Compressed Foundation JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/js/foundation.min.js" crossorigin="anonymous"></script>
    <!-- <script src="js/app.js"></script> -->
    <script src="./js/script.js"></script>
    </body>
    </html>
    `;
}

module.exports = generateHtml;