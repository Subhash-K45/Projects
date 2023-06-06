const express=require('express')
const {Contemporary_image_Table,Sculpture_image_table,Mixed_Art} = require("../Database/mongoose");

const router=express.Router()


router.get('/', async function (req, res) {
    console.log("Router Working");
    res.send('Hello');
})


router.get('/Contemporary_Paintings',async function (req,res){
  try{ 
    const result=await Contemporary_image_Table.find()
    res.send(result)
    console.log(result)
    }
   catch(err){
    console.log(res.status(statusbar).send(err))
   }
})

router.get('/Sculptures',async function(req,res){
  try{
    const result=await Sculpture_image_table.find()
    res.send(result)
  }catch(err){
    console.log(err)  
  }
})

router.get('/Mixed_Image',async function(req,res){
  try{
    const result=await Mixed_Art.find()
    res.send(result)
  }catch(err){
      console.log(err)
  }
})


module.exports=router