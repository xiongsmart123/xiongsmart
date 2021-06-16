let express = require('express');
let router = express.Router();
var fs =require('fs');
var path = require('path');
const mysql =require('mysql');
var User = require('./bean/user');
const { runInContext } = require('vm');
var db = require('./db/db');




router.get('/',(req,res)=>{
    
    db.sqlparam("select * from tab_title",(err,result)=>{
        res.render('about',{ data: result});
    });
   
});

router.get('/about',(req,res)=>{
    db.sqlparam("select * from tab_title",(err,result)=>{
        res.render('about',{ data: result});
    });
   
});

router.get('/index',(req,res)=>{
    db.sqlparam("select * from tab_home",(err,result)=>{
        res.render('index',{ data: result});
    });
});

router.get('/elements',(req,res)=>{
    res.render('elements');
});
router.get('/single',(req,res)=>{
    db.sqlparam("select * from t_single",(err,result)=>{
        res.render('single',{ data: result});
    });
});
router.get('/blog',(req,res)=>{
    res.render('blog');
});
router.get('/left',(req,res)=>{
    res.render('left');
});
router.get('/add',(req,res) =>{
    res.render(add);
    });
    
router.post('/add',(req,res) =>{
       db.sql("insert into people(use_name,t_id) values(?,?,?)",[
          req.body.use_name,
          req.body.t_id
       ],(err,rows)=>{
     
       })
});
router.get('/yellow',(req,res)=>{
    res.render('yellow');
});

router.get('/pp',(req,res)=>{
    res.render('pp');
});
router.get('/uu',(req,res)=>{
    res.render('uu');
});
router.get('/ii',(req,res)=>{
    res.render('ii');
});



module.exports = router;