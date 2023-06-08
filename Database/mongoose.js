const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Subhash:Subhash_2004@cluster0.gtlx7wl.mongodb.net/');

const data = require('../Data/Contemporary_Paintings');

const Contemporary_image_Table = mongoose.model('Contemporary_Paintings', {
  id: Number,
  img: String,
  category: String,
  price: Number,
  name:String,
  artist:String,
  description:String
});

const Sculpture_image_table=mongoose.model('Sculptures',{
  id:Number,
  img:String,
  category:String,
  price:Number,
  name:String,
  createrName:String,
  description:String
})

const Mixed_Art=mongoose.model('Mixed_Art',{
        id:Number,
        img:String,
        category:String,
        price:Number,
        name:String,
        name:String,
        artist:String,
        description:String
  })

const SignUp_User=mongoose.model('User',{
  firstName:String,
  lastName:String,
  email:String,
  password:String,
  Phone:Number
})

const SignUp_Creater=mongoose.model('Creater',{
  firstName:String,
  lastName:String,
  email:String,
  password:String,
  phone:String,
  Years_Of_Experience:String,
  Work_Place:String
})

const Event_Update=mongoose.model("Events",{
  Event_Title:String,
  Event_Timings:String,
  Event_Location:String,
  Event_Description:String
})

const Upcoming_Exibition=mongoose.model("Exibition",{
  Event_Title:String,
  Event_Timings:String,
  Event_Location:String,
  Event_Description:String
})

module.exports={
  Contemporary_image_Table,
  Sculpture_image_table,
  Mixed_Art,
  SignUp_User,
  SignUp_Creater,
  Event_Update,
  Upcoming_Exibition
}