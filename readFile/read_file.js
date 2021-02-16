var fs = require('fs');
fs.readFile('sampleText.txt', function(err, data) {
    console.log(data);
});