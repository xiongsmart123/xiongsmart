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
   db.sqlparam("insert into people(use_name,use_id) values('"+name+"','"+id+"')",[
      req.body.use_name,
      req.body.t_id
   ],(err,rows)=>{
    res.redirect("/ind")
   })
});
router.get('/:id', function (req, res) {
        let id = req.body.t_id;
        db.sqlparam("delete from people where use_id=" + id, function (err, rows) {
            if (err) {
                res.end('删除失败：' + err)
            } else {
                res.redirect('/ind');
            }
        });
    });


module.exports = router;
