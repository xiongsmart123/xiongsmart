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

router.get('/ind',(req,res)=>{
    res.render('ind');
});
router.get('/yellow',(req,res)=>{
    res.render('yellow');
});
router.get('/ka',(req,res)=>{
    res.render('ka');
});



router.get('/oo',(req,res)=>{
    res.render('oo');
});

router.get('/pp',(req,res)=>{
    res.render('pp');
});


module.exports = router;