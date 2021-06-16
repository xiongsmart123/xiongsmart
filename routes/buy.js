const { render } = require('ejs');
let express = require('express');
let router = express.Router();

const mysql =require('mysql');
var User = require('./bean/user');
var db = require('./db/db');


router.get('/',(req,res)=>{
   var count ='select count(t_name) as countName from ticket';
   
  db.sqlparam(count,function(err,rows){
    if (err) {
            res.end(err);
    }else{
        res.render('blg',{count:rows[0].countName})
    }
  });
});
router.post('/',(req, res)=>{
    let user_name =req.body.user_name;
    let user_pass = req.body.user_pass;
    var query ="select use_name,use_password from people where use_name='"+user_name+"'and use_password='"+user_pass+"'"
    db.sqlparam(query,function(err,rows){
         if (err) {
                 res.end(err);
         }else{
             res.render('ii')
         }
       });
});
module.exports = router;