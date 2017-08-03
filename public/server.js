const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const config = require('../config.js');
const port = 3000;
const userCtrl = require('../controllers/userCtrl.js')
const profileCtrl = require('../controllers/profileCtrl.js')

const app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ 
	secret: config.sessionSecret,
	resave: false,
	saveUninitialized: false 
}));

app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getFriendsProfiles);

app.use(express.static(__dirname + '/public'));



var corsOptions = {
	origin: 'http://localhost:3000'
};

app.listen(port, () => console.log(`listening on ${port}`));