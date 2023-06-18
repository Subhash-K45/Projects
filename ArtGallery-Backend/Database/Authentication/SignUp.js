const mongoose = require("mongoose");

const { SignUp_User } = require("../mongoose");

const saveData = async function ({
  firstName,
  lastName,
  email,
  Password,
  Phone,
}) {
  try {
    const SignUp = new SignUp_User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      Password: password,
      Phone: Phone,
    });
    await SignUp.save();
  } catch (error) {
   console.error(`Error saving ${firstName,lastName}:`, error);
  }
};

module.exports = { saveData };
