let express = require('express');
let router = express.Router();

const mysql =require('mysql');
var User = require('./bean/user');

router.get('/',(req,res)=>{
    res.render('task1');
});


router.post('/',(req,res) =>{
    let user_name =req.body.user_name;
    let user_pass = req.body.user_pass;
    var connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'xzh11',
        port:3306
       });
       connection.connect();
    var query ="select use_name,use_password from people where use_name='"+user_name+"'and use_password='"+user_pass+"'";
    connection.query(query,(err,result,fields)=>{
       var u =result[0];
        if(!u){
            res.json({"s":-1});
        }else{
            res.render('left');
        }
    })
    connection.end();
});

module.exports = router;