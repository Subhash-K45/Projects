const express=require('express')
const bcrypt=require('bcrypt')
const {Contemporary_image_Table,Sculpture_image_table,Mixed_Art, SignUp_User,SignUp_Creater} = require("../Database/mongoose");
const Hashed_Password=require('../bcrypt')

const {saveData}=require('../Database/Authentication/SignUp');
const save_creater_Data=require('../Database/Authentication/Creater_SignUp')
const { hashSync } = require('bcrypt');
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

router.post('/User_SignUp',async function(req,res){
  try{
    const {firstName,lastName,email,Password,Phone}=req.body
    const check=await SignUp_User.findOne({email:email})
    const Hashed_User_Password=await Hashed_Password(Password)
    const password=await Hashed_User_Password
    console.log(typeof password)
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

router.post('/User_login',async function(req,res){
  try{
    const {email,password}=req.body
    const User = await SignUp_User.findOne({email:email})
    if(User){
      const Check_Password=bcrypt.compare(password,User.password)
      if(Check_Password){
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

router.post('/Creater_SignUp',async(req,res)=>{
  try{
  const {firstName,lastName,email,Password,phone,ArtWork,Work_Place}=req.body
  const check=await SignUp_Creater.findOne({email:email})
  const Hashed_creater_Password=await Hashed_Password(Password)
  const password=Hashed_creater_Password

  if(check){
    res.send(`User Found`)
  }
  else{
    save_creater_Data({firstName,lastName,email,password,phone,ArtWork,Work_Place})
    res.send(`Saved Successfully`)
  }
  }
  catch(err){
    console.log(err)
  }
  
})

router.post('/Creater_Login',async(req,res)=>{
  try{
     const {email,password}=req.body
     const Creater=await SignUp_Creater.findOne({email:email})
     if(Creater){
      const Creater_Password=bcrypt.compare(password,Creater.password)
      if(Creater_Password){
        res.send(`Login Successfully`)
      }
      else{
        res.send(`Unauthorized`)
      }
     }

  }catch(err){
    console.log(err)
  }
})
module.exports=router