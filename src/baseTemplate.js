const generateCard = require('./generateCard');

function renderHMTL(data) {
    for (const item of data) {
        generateCard(item);
    }
}

module.exports = renderHTML;