const fs = require('fs');
module.exports = {
    sellProduct: (massiv) => {
        const productName = process.argv[3].toLowerCase();
        const amount = parseInt(process.argv[4]);


        let id = null;
        for (let i = 0; i < massiv.length; i++) {
            if (massiv[i].mahsulot.toLowerCase() == productName) {
                id = i;
                break;
            };
        };

        if (id == null) {
            console.log(`\nOmborxonda bunday maxsulot mavjud emas!\n`);
        } else {
            let newAmount = massiv[id].soni - amount;
            if(newAmount < 0){
                console.log(`\nOmborxonada ${massiv[id].soni} ta ${massiv[id].mahsulot} bor undan ortiq sota olmayiz!\n`);
            } else if(newAmount == 0){
                massiv.splice(id, 1);

                for(let i = 0; i < massiv.length; i++){
                    massiv[i].id = i + 1;
                }

                console.log(`\nOmborxonadan ${amount} ta ${productName} o'chirildi!\n`);
            } else {
                massiv[id].soni = newAmount;
                console.log(`\nOmborxonadan ${amount} ta ${productName} o'chirildi!\n`);
            }
        }
    },


};