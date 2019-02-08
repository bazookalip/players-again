let PORT = 5000;

let express = require('express');

let bodyParser = require('body-parser');

let app = express();

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

let players = [
    {name: 'Larry', 
    },   
    {name: 'Joe',
    },
    {name: 'Alan',
    }];

app.get('/players', (req, res) =>{
    res.send(players);
})

app.post('/new', (req, res) => {
    players.push(req.body);
    res.sendStatus(201);

});


app.listen(PORT, () => {
    console.log('running on port', PORT);   
})