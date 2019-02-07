let PORT = 5000;

let express = require('express');

let app = express();

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('running on port', PORT);
    
})