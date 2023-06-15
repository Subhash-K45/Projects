const mongoose = require("mongoose");
const data = require("../Data/Contemporary_Paintings");
const { Contemporary_image_Table } = require("./mongoose");

const saveData = async () => {
  for (const { id, img, category, price, name, artist, description } of data) {
    try {
      const Image = new Contemporary_image_Table({
        id,
        img,
        category,
        price,
        name,
        artist,
        description,
      });
      await Image.save();
      
    } catch (error) {
      console.error(`Error saving ${id}:`, error);
    }
  }
};

saveData();
