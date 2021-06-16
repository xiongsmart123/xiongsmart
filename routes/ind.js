let express = require('express');
let router = express.Router();

const mysql =require('mysql');
var db = require('./db/db');
//初始页面的数据显示
router.get('/',(req,res)=>{
   db.sql("select * from people",(err,rows) => {
    res.render('ind',{data:rows})
   });
   
});
router.post('/',(req,res) =>{
   let id =req.body.t_id
   let name =req.body.use_name
   let t_id =req.body.use_id
  db.sqlparam("insert into people(use_name,use_id,t_id) values('"+name+"','"+id+"','"+t_id+"')",(err,rows)=>{
   res.redirect("/ind")
  });
});

//收索
router.post('/ss',(req,res)=>{
           
   db.sqlparam("select * from people where use_name=? or use_id=?",[
               req.body.search,
               req.body.search,
            ],(err,rows)=>{
                console.log(err)
                res.render('ind',{ data: rows});
           });
});



//修改
router.get('/to/:use_id', function (req, res) {
   var id = req.params.use_id;
   
   db.sqlparam("select * from people where use_id="+id,function(err,rows){
   
          if (err) {
              res.end(err);
          } else {
      console.log(rows)
              res.render('gai', {datas: rows}); 
       }
    });

});

router.post('/to',function(req,res){
    db.sqlparam("update people set use_name=?,t_id=? where use_id=?",
   [req.body.use_name,
     req.body.t_id,
     req.body.use_id
   ],function (err, rows) {
              if (err) {
                  res.end( + err)
              } else {
                     res.redirect('/ind');
              }
     });
       
});
//删除
router.get('/del/:use_id', function (req, res) {
       let use_id = req.params.use_id;
       db.sqlparam("DELETE FROM people WHERE use_id = " + use_id, function (err, rows) {
           if (err) {
               res.end('删除失败：' + err)
           } else {
               res.redirect('/ind');
           }
  });
});


module.exports = router;
