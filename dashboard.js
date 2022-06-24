const fs = require('fs');
module.exports = {
    getData: () => {
        const rawData = fs.readFileSync('data.json')
        const data = JSON.parse(rawData);
        const massiv = data.products; // massiv;
        return massiv;
    },
    showData: (massiv) => {
        const transformed = massiv.reduce((acc, { id, ...x }) => { acc[id] = x; return acc }, {});
        console.table(transformed);
    },
};