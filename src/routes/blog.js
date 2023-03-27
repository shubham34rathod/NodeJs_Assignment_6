const express=require('express')
const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here

router.use(express.json())
router.use(express.urlencoded({extended:true}))
// router.get('/blog',(req,res)=>{
//     res.json({ok:'blog'})
// })

router.get('/',(req,res)=>{
    res.send("welcome to home")
})

router.get("/blog" , async(req, res)=>{
    try{
        let page = req.query.page;
        let serachTitle = await  Blog.find({topic:new RegExp(req.query.search, "i")});
        if(serachTitle.length){
            let pagination = serachTitle.slice((page-1)*5 );
            if(pagination.length){
                res.json(pagination);
            }else{
                res.status(400).send("no such result found");
            }
        }else{
            res.status(400).send("no such result found");
        }
    }catch(err){
        res.status(400).send(err);
    }
})

router.put('/blog/:id',async (req,res)=>{
    console.log(req.params);
    // res.send('id received')
    let update=req.body.posted_by;
    let data=await Blog.findByIdAndUpdate(req.params.id,{posted_by:update},{new:true})
    res.send(data)
})

router.get('/blog',(req,res)=>{
    let page=req.query.page;
    let search=req.query.search;
    console.log(page,search);
    res.send('xyz')
})

router.delete('/blog',(req,res)=>{
    console.log(req.params);
    // res.send('id received')
    let update=req.body.posted_by;
    let data=await Blog.findByIdAndUpdate(req.params.id,{posted_by:update},{new:true})
    res.send(data)
})

// router.put()

module.exports = router;