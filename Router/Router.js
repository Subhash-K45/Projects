const express=require('express')
const {Contemporary_image_Table,Sculpture_image_table,Mixed_Art, SignUp_User} = require("../Database/mongoose");

const {saveData}=require('../Database/Authentication/SignUp')
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

router.get('/Contemporary_Paintings/:id',async function(req,res){
  try{
    const SelectedId=req.params
    const result=await Contemporary_image_Table.find(SelectedId)
    res.send(result)
    console.log(result)
  }catch(err){
    res.send('error')
    console.log(err)
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

router.get('/Sculptures/:id',async function(req,res){
  try{
    const SelectedId=req.params
    const result=await Sculpture_image_table.find(SelectedId)
    res.send(result)
    console.log(result)
  }catch(err){
    res.send('error')
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

router.get('/Mixed_Image/:id',async function(req,res){
  try{
    const SelectedId=req.params
    const result=await Mixed_Art.find(SelectedId)
    res.send(result)
    console.log(result)
  }catch(err){
    res.send('error')
    console.log(err)
  }
})


router.get('/Artist',async function(req,res){
  try{
    const res1=await Contemporary_image_Table.find({})
    const obj=res1.map(({artist,category})=>{return {artist,category}})
    
    const res2=await Mixed_Art.find({})
    obj.push(res2.map(({artist,category})=>{return {artist,category}}))

    const res3=await Sculpture_image_table.find({})
    obj.push(res3.map(({createrName,category})=>{return {createrName,category}}))
    res.send(obj)
    }catch(err){
    console.log(err)
  }
})

router.post('/SignUp',async function(req,res){
  try{
    const {firstName,lastName,email,password,Phone}=req.body
    const check=await SignUp_User.findOne({email:email})
    if(check){
      res.send('userFound')
     }
      else{
        saveData({firstName,lastName,email,password,Phone})
        res.send('Saved Successfully')
      }
    
  }catch(err){
    console.log(err)
  }
})

router.post('/login',async function(req,res){
  try{
    const {email,password}=req.body
    const check = await SignUp_User.findOne({email:email})
    if(check){
      if(check.password===password){
        res.send('Login Sucessful')
      }
      else{
        res.send('Incorrect Password')
      }
    }
    else{
      res.send('User Not Found')
    }
  }catch(err){
    console.log(err)
  }
})




module.exports=router