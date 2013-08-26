var User = require('../models/user');
var config = require('../config');

/**
 * GET home page.
 */
// var _User = new mongoose.Schema({
//   userid      : Number,
//   username    : String,
//   password    : String,
//   ruleid      : Number,
//   status      : Number,
//   indate      : Date,
//   inuser      : String,
//   editdate    : Date,
//   edituser    : String
// });

/**
 * show the userlist page.
 */
var users = function(req, res){
  res.render('user/list', { title: '用户列表', leftbar:config.leftbar, menugroup:"用户管理"})
};

var getusers = function(req, res) {
  User.find({}, function(err, docs) {
    if(err) {
      res.send({error: "db 联接异常"});
    }
    else {
      res.send({items: docs});
    }
  })
}

/**
 * show the new user page.
 */
var newuser = function(req, res){
  res.render('user/new', { title : '添加用户', leftbar:config.leftbar, menugroup:"用户管理" });
};

var doadduser = function(req, res){
  //检查两次输入的密码是否一致
  if(req.body['password_repeat'] != req.body['password']){
    res.send({error: "两次密码输入不一致"});
  }

  User.find({userid: req.body.userid}, function(err, docs) {
    if(err) {
      res.send({error: "db 联接异常"});
    }
    else if(docs && docs.length > 0) {
      res.send({error: "userid " + req.body.userid + "已经存在"});
    }
    else{
      var user = new User({
        userid    :   req.body.userid,
        username  :   req.body.username,
        password  :   req.body.password,
        ruleid    :   0,
        status    :   0,
        indate    :   new Date(),
        inuser    :   "system",
        editdate  :   new Date(),
        edituser  :   "system" 
      })

      user.save(function(err, doc) {
        if(err) {
          res.send({error: "db 联接异常"});
        }
        res.send("success");
      })
    }
  })
};

module.exports = function(app){
	app.get('/users', users);
  app.get('/users/api/getlist', getusers);
	app.get('/users/new', newuser);
	app.post('/users/api/adduser', doadduser);
};

