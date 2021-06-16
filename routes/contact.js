let express = require('express');
let router = express.Router();

const mysql =require('mysql');
var db = require('./db/db');

router.get('/',(req,res)=>{
    res.render('contact');
});
router.post('/',(req,res) =>{
    let c_name= req.body.c_name
    let c_email=req.body.c_email
    let c_subject=req.body.c_subject
    let c_message=req.body.c_message
    db.sqlparam("insert into contact(c_name,c_email,c_subject,c_message) values('"+c_name+"','"+c_email+"','"+c_subject+"','"+c_message+"')",(err,rows)=>{
         if (err) {
             res.end(err);
           }else{
               res.render('pp');
           }
    });
});

module.exports = router;