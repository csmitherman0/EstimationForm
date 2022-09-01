const info = require('./data');



module.exports = function (jobData) {
    let total = 0;

    if (jobData.service === 'carpet-cleaning') {
        const { areas } = jobData;
        if (areas.includes('bedrooms')) {
            total += jobData['num-bedrooms'];

            //ERROR ASSIGNMENT TO CONSTANT VARIABLE
            // areas = areas.splice(areas.findIndex(e => e === 'bedrooms'), 1);
        }
        total = areas.length * 50;
    }

    return total;
}