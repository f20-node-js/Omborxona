
const dashboard = require('./dashboard.js')
const deploy = require('./deploy');
const sell = require('./sell.js');

const data = dashboard.getData();


const mode = process.argv[2];

const dashboardMode = mode == '-dash';
const deployMode = mode == '-dep';
const sellMode = mode == '-sell';




if (dashboardMode) {
    dashboard.showData(data);
} else if (deployMode) {
    deploy.deployData(data);
    deploy.updateJson(data);
} else if (sellMode) {
    sell.sellProduct(data);
    deploy.updateJson(data);
}

