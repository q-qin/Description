var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//设置跨域访问
app.all('*', function(req, res, next) {
	var host = req.header('host');
	console.log(host);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	if (req.method == 'OPTIONS') {
		// 让options请求快速返回
		res.send(200);
	} else {
		next();
	}
});

var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'juzidb',
	connectionLimit: 400
});


// 登录
app.post('/login', function(req, res) {
	var strSql = 'select * from mgr_users ';
	var strWhere = "where username='" + req.body.username + "' and password='" + req.body.password + "'";
	pool.getConnection(function(err, connection) {
		if (err) {
			res.send({
				code: -1,
				data: '',
				msg: '请求异常，请稍后重试！'
			});
		}else{
			//查询
			connection.query(strSql + strWhere, function(err, rows, fields){
				if (err){
					res.send({
						code: -1,
						data: '',
						msg: '请求异常，请稍后重试！'
					})
				}else{
					if (rows.length == 0) {
						res.send({
							code: -1,
							data: '',
							msg: '暂无用户'
						})
					} else {
						res.send({
							code: 0,
							data: {
								id:rows[0].id,
								username: rows[0].username,
							},
							msg: '登陆成功'
						});
					}
				}
			})
			connection.release();
		}
	})
});

// 资讯列表
app.post('/newslist',function(req,res){
	var strSql = 'select * from mgr_news where 1=1 ';
	if(req.body.type !=0){
		strSql += " and type='"+req.body.type+"' ";
	}
	if(!!req.body.starttime && !!req.body.endtime){
		strSql += " and updatetime between '"+req.body.starttime+"' and '"+req.body.endtime+"' ";
	}
	if(!!req.body.search){
		strSql += " and content like '%"+req.body.search+"%' ";
	}
	strSql += ' order by sort desc ';
	console.log(strSql);
	pool.getConnection(function(err, connection) {
		if (err) {
			res.send({
				code: -1,
				data: '',
				msg: '请求异常，请稍后重试！'
			});
		}else{
			//查询
			connection.query(strSql, function(err, rows, fields){
				if (err){
					res.send({
						code: -1,
						data: '',
						msg: '请求异常，请稍后重试！'
					})
				}else{
					res.send({
						code: 0,
						data: rows,
						msg: '数据获取成功！'
					});
				}
			})
			connection.release();
		}
	})
});

// 资讯详情
app.post('/newsdetail',function(req,res){
	var strSql = "SELECT * FROM mgr_news WHERE id="+req.body.id;
	console.log(strSql);
	pool.getConnection(function(err, connection) {
		if (err) {
			res.send({
				code: -1,
				data: '',
				msg: '请求异常，请稍后重试！'
			});
		}else{
			//查询
			connection.query(strSql, function(err, rows, fields){
				if (err){
					res.send({
						code: -1,
						data: '',
						msg: '请求异常，请稍后重试！'
					})
				}else{
					res.send({
						code: 0,
						data: rows,
						msg: '数据获取成功！'
					});
				}
			})
			connection.release();
		}
	})
})

// 资讯新增
app.post('/newsadd',function(req,res){
	var strSql = ' INSERT INTO mgr_news (title,subtitle,type,sort,content,createuser,createtime,updateuser,updatetime,delflg) VALUES(';
	strSql += "'"+ req.body.title +"',";
	strSql += "'"+ req.body.subtitle +"',";
	strSql += "'"+ req.body.type +"',";
	strSql += "'"+ req.body.sort +"',";
	strSql += "'"+ req.body.content +"',";
	strSql += "'"+ req.body.createuser +"',";
	strSql += "'"+ req.body.createtime +"',";
	strSql += "'"+ req.body.updateuser +"',";
	strSql += "'"+ req.body.updatetime +"',";
	strSql += "'1')";
	console.log(strSql);
	pool.getConnection(function(err, connection) {
		if (err) {
			res.send({
				code: -1,
				data: '',
				msg: '请求异常，请稍后重试！'
			});
		}else{
			//查询
			connection.query(strSql, function(err, rows, fields){
				if (err){
					console.log(err.message);
					res.send({
						code: -1,
						data: '',
						msg: '请求异常，请稍后重试！'
					})
				}else{
					res.send({
						code: 0,
						data: '',
						msg: '操作成功'
					});
				}
			})
			connection.release();
		}
	})
})

// 资讯修改
app.post('/newsedit',function(req,res){
	var strSql = " UPDATE mgr_news SET ";
	strSql += "title='"+req.body.title+"', ";
	strSql += "subtitle='"+req.body.subtitle+"',";
	strSql += "type='"+req.body.type+"',";
	strSql += "sort='"+req.body.sort+"',";
	strSql += "content='"+req.body.content+"',";
	strSql += "updateuser='"+req.body.updateuser+"',";
	strSql += "updatetime='"+req.body.updatetime+"' ";
	strSql += "WHERE id="+req.body.id;
	console.log(strSql);
	pool.getConnection(function(err, connection) {
		if (err) {
			res.send({
				code: -1,
				data: '',
				msg: '请求异常，请稍后重试！'
			});
		}else{
			//查询
			connection.query(strSql, function(err, rows, fields){
				if (err){
					console.log(err.message);
					res.send({
						code: -1,
						data: '',
						msg: '请求异常，请稍后重试！'
					})
				}else{
					res.send({
						code: 0,
						data: '',
						msg: '操作成功'
					});
				}
			})
			connection.release();
		}
	})
})

// 资讯下线
app.post('/newsoff',function(req,res){
	var strSql = " UPDATE mgr_news SET delflg = '1' WHERE id ="+req.body.id;
	console.log(strSql);
	pool.getConnection(function(err, connection) {
		if (err) {
			res.send({
				code: -1,
				data: '',
				msg: '请求异常，请稍后重试！'
			});
		}else{
			//查询
			connection.query(strSql, function(err, rows, fields){
				if (err){
					console.log(err.message);
					res.send({
						code: -1,
						data: '',
						msg: '请求异常，请稍后重试！'
					})
				}else{
					res.send({
						code: 0,
						data: '',
						msg: '操作成功'
					});
				}
			})
			connection.release();
		}
	})
})

// 资讯上线
app.post('/newson',function(req,res){
	var strSql = " UPDATE mgr_news SET delflg = '0' WHERE id ="+req.body.id;
	console.log(strSql);
	pool.getConnection(function(err, connection) {
		if (err) {
			res.send({
				code: -1,
				data: '',
				msg: '请求异常，请稍后重试！'
			});
		}else{
			//查询
			connection.query(strSql, function(err, rows, fields){
				if (err){
					console.log(err.message);
					res.send({
						code: -1,
						data: '',
						msg: '请求异常，请稍后重试！'
					})
				}else{
					res.send({
						code: 0,
						data: '',
						msg: '操作成功'
					});
				}
			})
			connection.release();
		}
	})
})

// 资讯删除
app.post('/newsdel',function(req,res){
	var strSql = " DELETE FROM mgr_news WHERE id ="+req.body.id;
	console.log(strSql);
	pool.getConnection(function(err, connection) {
		if (err) {
			res.send({
				code: -1,
				data: '',
				msg: '请求异常，请稍后重试！'
			});
		}else{
			//查询
			connection.query(strSql, function(err, rows, fields){
				if (err){
					console.log(err.message);
					res.send({
						code: -1,
						data: '',
						msg: '请求异常，请稍后重试！'
					})
				}else{
					res.send({
						code: 0,
						data: '',
						msg: '操作成功'
					});
				}
			})
			connection.release();
		}
	})
})

app.listen(3001);
console.log('Listening on mgrAPI :3001...');