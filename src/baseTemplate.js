const fs = require("fs");

const generateCard = require('./employeeCard');

function renderHTML(data) {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <header class="text-center py-1 bg-primary text-white mb-5">
                <h1 class="text-white-50">Team Profile</h1>
            </header>
            <div class="container">
            ${renderCards(data)}
            </div>
        </body>
        </html> 
    `;

    fs.writeFileSync(__dirname + "/../dist/index.html", html);
    console.log("\n");
    console.log("Team profile written to " + __dirname + "/dist/index.html");
}

function renderCards(data) {
    const len = data.length;
    let cards = "";
    for (let i = 0; i < len; i++) {
        cards += i === 0 ? '<div class="row mb-4">' : '';
        cards += generateCard(data[i]);
        cards += isRowClose(i + 1, 3, len); 
    }
    return cards;
}


function isRowClose(index, columns, length) {
    let result = '';
    if (index !== 0 && index % columns === 0 && index !== length) {
        result += '</div><div class="row mb-4">';
    }
    if (index !== 0 && index === length) {
        result += '</div>';
    }
    return result;
}

module.exports = renderHTML;