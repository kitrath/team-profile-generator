const generateCard = require('./employeeCard');

function renderHTML(data) {
    for (const item of data) {
        generateCard(item);
    }
}

module.exports = renderHTML;