let express = require('express');
let router = express.Router();

const mysql =require('mysql');
var db = require('./db/db');

router.get('/',(req,res)=>{
   db.sql("select * from people",(err,rows) => {
    res.render('ind',{data:rows})
   });
   
});


router.post('/',(req,res) =>{
    let id =req.body.t_id
    let name =req.body.use_name
    let t_id =req.body.use_id
   db.sqlparam("insert into people(use_name,use_id,t_id) values('"+name+"','"+id+"','"+t_id+"')",[
      req.body.use_name,
      req.body.t_id,
      req.body.use_id
   ],(err,rows)=>{
    res.redirect("/ind")
   })
});
router.get('/to/:use_id', function (req, res) {
   var id = req.params.use_id;
   console.log(id);
db.sqlparam("select * from people where use_id="+id,function(err,rows){
   
          if (err) {
              res.end('修改页面跳转失败:' + err);
          } else {
   console.log(rows)
              res.render('gai', {datas: rows}); 
       }
    });

});

router.post('/to/:use_id', function (req, res) {
  
   
    var name = req.body.use_name;
    var t_id =req.body.t_id;
    var use_id =req.body.use_id;
   console.log(name);
   console.log(id);
   db.sqlparam("update people set use_name='"+name+"',use_id='"+use_id+"',t_id='"+t_id+"'where use_id="+use_id,function (err, rows) {
              if (err) {
                  res.end('修改失败：' + err)
              } else {
                     res.redirect('/ind');
              }
     });
});

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