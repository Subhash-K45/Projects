const mongoose = require("mongoose");
const data = require("../Data/Sculptures");
const { Sculpture_image_table } = require("./mongoose");

const saveData = async function () {
  for (let {
    id,
    img,
    category,
    price,
    name,
    createrName,
    description,
  } of data) {
    try {
      const Sculpture = new Sculpture_image_table({
        id,
        img,
        category,
        price,
        name,
        createrName,
        description,
      });
      await Sculpture.save();
    } catch (error) {
      console.error(`Error saving ${id}:`, error);
    }
  }
};

saveData();
