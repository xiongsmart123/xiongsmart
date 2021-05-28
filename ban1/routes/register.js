let express = require('express');
let router = express.Router();

const mysql =require('mysql');
var User = require('./bean/user');

router.get('/',(req,res)=>{
    res.render('register');
});

router.post('/', (req, res) => {
    let user = new User(req.body.user_name,req.body.user_pass);
    
    let connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        port:'3306',
        password:'123456',
<<<<<<< HEAD
        database:'xzh11'
=======
        database:'xzh13'
>>>>>>> two
    
    });
    connection.connect();
    let sql = "insert people(use_name,use_password)values('"+user.use_name+"','"+user.use_pass+"')";
    connection.query(sql,(err,result)=>{
        if(err){
            console.error('error',err);
            return;
        }
        console.log('result',result);
        res.render('left')
    });
   connection.end();
});

module.exports = router;
