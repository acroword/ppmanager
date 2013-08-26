var userroute = require('./user');

/*
 * GET home page.
 */

var index = function(req, res){
  res.render('index', { title: '首页' });
};

var login = function(req, res){
  res.send('login....');
};

var dologin = function(req, res){
  res.send('do login.');	
};

var loginout = function(req, res){
  res.send('loginout.');	
};

module.exports = function(app){
	app.get('/', index);
	app.get('/login', login);
	app.post('login', dologin);
	app.get('/loginout', loginout);
  userroute(app);
};

