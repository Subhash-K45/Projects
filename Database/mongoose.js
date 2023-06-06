const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Subhash:Subhash_2004@cluster0.gtlx7wl.mongodb.net/');

const data = require('../Data/Contemporary_Paintings');

const Contemporary_image_Table = mongoose.model('Contemporary_Paintings', {
  id: Number,
  img: String,
  category: String,
  price: Number
});

const Sculpture_image_table=mongoose.model('Sculptures',{
  id:Number,
  img:String,
  category:String,
  price:Number
})

const Mixed_Art=mongoose.model('Mixed_Art',{
        id:Number,
        img:String,
        category:String,
        price:Number,
        name:String
  })

const SignUp_User=mongoose.model('User',{
  firstName:String,
  lastName:String,
  email:String,
  password:String,
  Phone:Number
})


module.exports={Contemporary_image_Table,Sculpture_image_table,Mixed_Art,SignUp_User}