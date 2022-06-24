const fs = require('fs');
module.exports = {

    updateJson: (massiv) => {

        let newData = {
            products: massiv
        }

        newData = JSON.stringify(newData);
        fs.writeFileSync('data.json', newData);
    },

    deployData: (massiv) => {
        const productName = process.argv[3].toLowerCase();
        const amount = process.argv[4];

        let id = null;
        for (let i = 0; i < massiv.length; i++) {
            if (massiv[i].mahsulot.toLowerCase() == productName) {
                id = i;
                break;
            };
        };

        if (id == null) {
            let newId = parseInt(massiv.length) + 1;
            let newAnount = parseInt(amount);
            let newItem = {
                id: newId,
                mahsulot: productName,
                soni: newAnount
            }
            massiv.push(newItem);
            console.log(`\nOmborxonaga ${newAnount} ta ${productName} qo'shildi!\n`)
        } else {
            massiv[id].soni += parseInt(amount);
            console.log(`\nOmborxonaga ${amount} ta ${productName} qo'shildi!\n`)
        }
    },

};