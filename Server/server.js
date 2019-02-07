let PORT = 5000;

let express = require('express');

let app = express();

app.use(express.static('server/public'));

let players = ['Larry', 'Joe']

app.get('/', (req, res) =>{
    res.send(players);
})

app.listen(PORT, () => {
    console.log('running on port', PORT);
    
})