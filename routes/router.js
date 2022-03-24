const express=require('express');
const router=express.Router();
router.get(express.static('public'));

const colorsRoute=require('./api/colorsRoute');
const hexRoute=require('./api/hexRoute');

router.get('/colors',colorsRoute);
router.get('/colors/:id',hexRoute);

router.get('/',(req,res)=>{
    res.render('pages/home',{
        title:'Home',
        name:'Colors API'
    })
});

module.exports=router;