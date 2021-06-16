let express = require('express');
let router = express.Router();
const mysql =require('mysql');
var db = require('./db/db');

router.get('/',(req,res)=>{
    db.sql("select * from people",(err,rows) => {
     res.render('ka',{data:rows})
    });    
});
module.exports = router;