const express = require("express");
const bcrypt = require("bcrypt");
const {
  Contemporary_image_Table,
  Sculpture_image_table,
  Mixed_Art,
  SignUp_User,
  SignUp_Creater,
  Event_Update,
} = require("../Database/mongoose");
const Hashed_Password = require("../bcrypt");

const { saveData } = require("../Database/Authentication/SignUp");
const save_creater_Data = require("../Database/Authentication/Creater_SignUp");
const Save_Event = require("../Database/EventUpdate");
const Upcoming_Exibition_Data = require("../Database/Upcoming_Exibition");
const router = express.Router();

router.get("/",async function(req,res){
  res.send('Welcome To Our Gallery')
})
router.get("/Gallery_Overview", async function (req, res) {
  res.send(["Contemporary Paintings", "Sculptures", "Mixed Image"]);
});

router.get("/Contact",async function(req,res){
  res.send({
    phone:"(123)-456-7890",
    email:"info@artgallery.com",
    Address:`123 main st 
    Anytown USA`
  })
})

router.get("/Contemporary_Paintings", async function (req, res) {
  try {
    const result = await Contemporary_image_Table.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

router.get("/Contemporary_Paintings/:id", async function (req, res) {
  try {
    const SelectedId = req.params;
    const result = await Contemporary_image_Table.find(SelectedId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.get("/Sculptures", async function (req, res) {
  try {
    const result = await Sculpture_image_table.find();
    res.send(result);
  } catch (err) {}
});

router.get("/Sculptures/:id", async function (req, res) {
  try {
    const SelectedId = req.params;
    const result = await Sculpture_image_table.find(SelectedId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.get("/Mixed_Image", async function (req, res) {
  try {
    const result = await Mixed_Art.find();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.get("/Mixed_Image/:id", async function (req, res) {
  try {
    const SelectedId = req.params;
    const result = await Mixed_Art.find(SelectedId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.get("/Artist", async function (req, res) {
  try {
    const obj = [];
    const res1 = await Contemporary_image_Table.find({});
    obj.push(
      res1.map(({ artist, category }) => {
        return { artist, category };
      })
    );

    const res2 = await Mixed_Art.find({});
    obj.push(
      res2.map(({ artist, category }) => {
        return { artist, category };
      })
    );

    const res3 = await Sculpture_image_table.find({});
    obj.push(
      res3.map(({ createrName, category }) => {
        return { createrName, category };
      })
    );
    res.send(obj);
  } catch (err) {
    console.log(err);
  }
});

router.post("/User_SignUp", async function (req, res) {
  try {
    const { firstName, lastName, email, Password, Phone } = req.body;
    const check = await SignUp_User.findOne({ email: email });
    const Hashed_User_Password = await Hashed_Password(Password);
    const password = await Hashed_User_Password;
    console.log(typeof password);
    if (check) {
      res.send("userFound");
    } else {
      saveData({ firstName, lastName, email, password, Phone });
      res.send("Saved Successfully");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/User_login", async function (req, res) {
  try {
    const { email, password } = req.body;
    const User = await SignUp_User.findOne({ email: email });
    if (User) {
      const Check_Password = await bcrypt.compare(password, User.password);
      if (Check_Password) {
        res.send("Login Sucessfull");
      } else {
        res.send("Incorrect Password");
      }
    } else {
      res.send("User Not Found");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/Creater_SignUp", async (req, res) => {
  try {
    const { firstName, lastName, email, Password, phone, ArtWork, Work_Place } =
      req.body;
    const check = await SignUp_Creater.findOne({ email: email });
    const Hashed_creater_Password = await Hashed_Password(Password);
    const password = Hashed_creater_Password;

    if (check) {
      res.send("User Found");
    } else {
      save_creater_Data({
        firstName,
        lastName,
        email,
        password,
        phone,
        ArtWork,
        Work_Place,
      });
      res.send("Saved Successfully");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/Creater_Login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const Creater = await SignUp_Creater.findOne({ email: email });

    if (Creater) {
      const Creater_Password = await bcrypt.compare(password, Creater.password);
      if (Creater_Password) {
        res.send("Login Successfully");
      } else {
        res.send("Unauthorized");
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/Creater/Event", async (req, res) => {
  try {
    const { Event_Title, Event_Timings, Event_Location, Event_Description } =
      req.body;
    await Save_Event({
      Event_Title,
      Event_Timings,
      Event_Location,
      Event_Description,
    });
    res.send("Saved suceesfully");
  } catch (error) {
    console.log(err);
  }
});

router.post("/Upcoming_Exibition", async (req, res) => {
  try {
    const { Event_Title, Event_Timings, Event_Location, Event_Description } =
      req.body;
    await Upcoming_Exibition_Data({
      Event_Title,
      Event_Timings,
      Event_Location,
      Event_Description,
    });
    res.send("Saved Successfully");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
