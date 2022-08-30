var figlet = require('figlet');
var colors = requ
figlet('HeHe', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});