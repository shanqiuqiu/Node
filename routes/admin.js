var express = require('express');
var router = express.Router();
var usemysql = require('../module/db.js');
var mysql = new usemysql('localhost','root','','blog');
/*管理员模块*/
router.get('/', function(req, res, next) {
	var user = req.session.user;
	if(!user){
		res.redirect('/');
		return;
	} 
	var page = Number(req.query.page) || 1;
	if(page <= 1){
		page = 1;
	}
	var start = (page - 1) * 9;
	var end = 9;
	var limit = start + ',' + end;
	mysql.selectData('article','*','id>0',limit,function(data){
		var pageTotal = Math.floor(data.length / end);
		if(page )
		console.log(data.length)
		res.render('admin',{data:data,user:req.session.user,page:page});	
	});
}).get('/audited',function(req,res){
	var list = Number(req.query.list) || 1;
	if(list <= 1){
		list = 1;
	}
	var start = (list - 1) * 9;
	var end = 9;
	var limit = start + ',' + end;
	mysql.selectData('article','*','status=0',limit,function(data){	
		res.render('audited',{data:data,user:req.session.user,list:list});
	});
}).get('/unaudited',function(req,res){
	var total = Number(req.query.total) || 1;
	if(total <= 1){
		total = 1;
	}
	var start = (total - 1) * 9;
	var end = 9;
	var limit = start + ',' + end;
	mysql.selectData('article','*','status=1',limit,function(data){	
		mysql.selectData('article','*','id>0',limit,function(result){
			res.render('unaudited',{data:data,user:req.session.user,total:total});
		});
	});
}).get('/mod',function(req,res){
	var id = req.query.id;
	mysql.selectData('article','*','id='+id,1,function(data){
		res.render('mod',{data:data,user:req.session.user})
	});
}).get('/insert',function(req,res){
	res.render('insert',{user:req.session.user});
}).get('/logout',function(req,res){
	req.session.user = null;
	res.redirect('/');
}).get('/del',function(req,res){
	var id = req.query.id;
	mysql.delData('article','id='+id,function(data){
		res.redirect('/admin');
	})
}).post('/insert',function(req,res){
	var title = req.body.title;
	var user = req.body.user;
	var con = req.body.con;
	var browse = req.body.browse;
	mysql.insertData('article',['title','author','content','hit'],['?','?','?','?'],[title,user,con,browse],function(data,err){
		res.redirect('/admin');
	});
}).post('/update',function(req,res){
	var title = req.body.title;
	var user = req.body.user;
	var con = req.body.con;
	var browse = req.body.browse;
	var id = req.body.id;
	mysql.updataData('article',['title','author','content','hit'],[title,user,con,browse],'id',id,function(data,err){
		res.redirect('/admin');
	});
}).post('/status',function(req,res){
	var id = req.body.id;
	var status = req.body.status;
		mysql.updataData('article',['status'],[status],'id',id,function(data,err){
			res.send(status);
		});
});

module.exports = router;