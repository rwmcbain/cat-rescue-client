require('dotenv').config(); //# dot-env
var db = require('knex')({	//# knex
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'sinatra',
		password: 'w0rk5pac3',
		database: 'cats'
	}
});

module.exports = db;