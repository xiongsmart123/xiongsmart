let express = require('express');
let router = express.Router();

const mysql =require('mysql');
var User = require('./bean/user');

router.get('/',(req,res)=>{
    res.render('oo');
});


router.post('/', (req, res) => {
    let user = new User(req.body.user_name,req.body.user_pass,req.body.user_time,req.body.user_datetime,req.body.user_price);
    
    let connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        port:'3306',
        password:'123456',
        database:'xzh13'
    
    });
    connection.connect();
    let sql = "insert into  ticket(t_usename,t_time,t_datetime,t_price) values('"+user.use_name+"','"+user.use_time+"','"+user.use_datetime+"','"+user.use_price+"')";
     connection.query(sql,(err,result)=>{
        if(err){
            console.error('error',err);
            return;
        }
        console.log('result',result);
        res.render('left');
    });
   connection.end();
});

module.exports = router;