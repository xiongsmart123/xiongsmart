let express = require('express');
let router = express.Router();
var fs =require('fs');
var path = require('path');
const mysql =require('mysql');
var User = require('./bean/user');
const { runInContext } = require('vm');




router.get('/',(req,res)=>{
    res.render('about');
});

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/index',(req,res)=>{
    res.render('index');
});



router.get('/contact',(req,res)=>{
    res.render('contact');
});
router.get('/elements',(req,res)=>{
    res.render('elements');
});
router.get('/single',(req,res)=>{
    res.render('single');
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
router.get('/ka',(req,res)=>{
    res.render('ka');
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
router.get('/blg',(req,res)=>{
    res.render('blg');
});



module.exports = router;