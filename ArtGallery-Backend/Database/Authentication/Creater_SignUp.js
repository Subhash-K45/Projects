const { SignUp_Creater } = require("../mongoose");

const save_creater_Data = async function ({
  firstName,
  lastName,
  email,
  password,
  phone,
  Years_Of_Experience,
  Work_Place,
}) {
  try {
    const Image = new SignUp_Creater({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      Years_Of_Experience: Years_Of_Experience,
      Work_Place: Work_Place,
    });
    await Image.save();
  } catch (error) {
    console.error(`Error saving ${firstName,lastName}:`, error);
  }
};

module.exports = save_creater_Data;
