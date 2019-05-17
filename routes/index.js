var express = require('express');
var router = express.Router();
var usemysql = require('../module/db.js');
var mysql = new usemysql('localhost','root','','blog');
router.get('/', function(req, res, next) {
	mysql.selectData('article','*','status=0 ORDER BY ID DESC',6,function(data){
		mysql.selectData('article','*','id>0 order by hit desc',6,function(result){
			res.render('index',{data:data,restitle:'首页',result:result});
		});
	});
}).get('/details',function(req,res){
	var id = req.query.id;
	var hit = Number(req.query.hit) + 1;	
	mysql.updataData('article',['hit'],[hit],'id',id,function(data,err){
		mysql.selectData('article','*','id='+id,1,function(datas){
			mysql.selectData('article','*','id>0 order by hit desc',6,function(result){
				res.render('details',{data:datas,result:result,title:'详情'});
			});
		});
	});
})
module.exports = router;