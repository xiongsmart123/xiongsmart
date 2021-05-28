var mysql = require('mysql');
var mysqlConnect = {};
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '123456',
  database        : 'xzh13'
});
 
mysqlConnect.sql = function(query, callback){
 
	if (!query) {
		callback();
		return;
	}
	pool.query(query, function(err, rows, fields) {
	  if (err) {
	    console.log(err);
	    callback(err, null);
	    return;
	  };
      console.log(err);
      console.log(rows);
 
	  callback(null, rows, fields);
	});
}
mysqlConnect.sqlparam = function(query,param, callback){
 
	if (!query) {
		callback();
		return;
	}
	pool.query(query,param, function(err, rows, fields) {
	  if (err) {
	    console.log(err);
	    callback(err, null);
	    return;
	  };
 
	  callback(null, rows, fields);
	});
}
module.exports = mysqlConnect;
