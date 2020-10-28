const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Config
const config = require('./config/config.json');
require('dotenv').config('.env');

const routes = require('./api/routes');
const uploadRoutes = require('./api/upload-routes');

const app = express();

const port = config.development.port || process.env.PORT || 3344;;

app.use(cors());

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(
	bodyParser.json({
		type: 'application/json'
	})
);

app.use(express.static('public'));

app.use('/api', routes);
app.use('/upload', uploadRoutes);

app.listen(port, function () {
  console.log(`Server running at http://${config.development.host}:${port}`);
});

