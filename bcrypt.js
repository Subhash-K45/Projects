const bcrypt = require("bcrypt");
async function Bcrypt(password) {
  const salt = await bcrypt.genSalt(10);
  const Hashed_Password = await bcrypt.hash(password, salt);
  return Hashed_Password;
}

module.exports = Bcrypt;
