var express = require('express');
var router = express.Router();
var usemysql = require('../module/db.js');
var mysql = new usemysql('localhost','root','','blog');
router.get('/',function(req,res){
	res.render('login');
}).post('/',function(req,res){
	var user = req.body.user;
	var password = req.body.password;
	mysql.selectData('author','*','authorname = "' + user + '" && authorpassword = "' + password + '"',1,function(data,err){
		console.log(data)
		if(!data[0]){
			res.send(500);
			return;
		}else{
			req.session.user = data[0].authorname;
			res.send(200);
		}
	});
}).get('/register',function(req,res){
	res.render('register')
}).post('/register',function(req,res){
	var author = req.body.author;
	var password = req.body.password;
	mysql.selectData('author','*','authorname = "'+ author +'"',function(result,err){
		if(result[0]){
			res.send(500)
		}else{
			mysql.insertData('author',['authorname','authorpassword'],['?','?'],[author,password],function(data,err){
				res.redirect('/');
			})
		}
	})
}).get('/login',function(req,res){
	res.render('login/login');
})
module.exports = router;