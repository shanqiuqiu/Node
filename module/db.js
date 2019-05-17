 function useMysql(host,user,password,database){
	var mysql = require('mysql');
	var usemysql = mysql.createConnection({
		host : host,
		user : user,
		password : password,
		port : '3306',
		database : database
	});
	/*
		tablename : 表名
		field : 字段
		fieldVal : 字段值 
		condition : 条件
		conditionVal : 条件值
	 */
	//查询数据
	this.selectData = function(tablename,field,condition,limit,callback){
		var selectsql = 'SELECT '+field+' FROM '+tablename+' WHERE '+condition+' LIMIT '+limit;
		usemysql.query(selectsql,function(err,data){
			callback(data,err);
		})
	}
	//删除数据
	this.delData = function(tablename,condition,callback){
		var delsql = 'DELETE FROM '+tablename+' WHERE '+condition;
		usemysql.query(delsql,function(err,data){
			callback(data);
		});
	}
	//添加数据
	this.insertData = function(tablename,field,ask,fieldVal,callback){
		var insertsql = 'INSERT INTO '+tablename+'('+forArr(field)+')  VALUES('+forArr(ask)+')';
		var insertVal = forArr(fieldVal);
		usemysql.query(insertsql,insertVal,function(data,err){
			callback(data,err);
		});
	}
	//修改数据
	this.updataData = function(tablename,field,fieldVal,condition,conditionVal,callback){
		var updataSql = 'UPDATE '+tablename+' SET '+forArr4(field)+' WHERE '+condition+' = ?';
		var updataSqlValue = (fieldVal.join(',')+','+conditionVal).split(',');
        console.log(updataSql)
        console.log(updataSqlValue)
        usemysql.query(updataSql,updataSqlValue,function(err,data){
            callback(data,err)
        });
	}
	function forArr(where){
		for(i in where){
			where[i];
		}
		return where;
	}
	function forArr4(field){
			for(i in field){
				field[i]+='=?';
			}
			return field;
		}
}

module.exports = useMysql;