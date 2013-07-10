var User = require('../models/user');

/*
 * GET home page.
 */

var index = function(req, res){
  res.render('index', { title: '首页' });
};

var users = function(req, res){
  User.getlist(function(err, items){
      if(err){
        res.send(err);
        return;
      }
      res.send(items);
  })

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

var adduser = function(req, res){
  res.render('adduser', { title : '添加用户' });
};

var doadduser = function(req, res){
  //检查两次输入的密码是否一致
  if(req.body['password-repeat'] != req.body['password']){
  	req.flash('error', '两次密码输入不一致');
  	return res.redirect('/adduser');
  }
};

module.exports = function(app){
	app.get('/', index);
	app.get('/users', users);
	app.get('/login', login);
	app.post('login', dologin);
	app.get('/loginout', loginout);
	app.get('/adduser', adduser);
	app.post('/adduser', doadduser);
};

