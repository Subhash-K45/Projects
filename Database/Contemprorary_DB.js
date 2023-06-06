const mongoose =require('mongoose')
const data=require('../Data/Contemporary_Paintings')
const {Contemporary_image_Table}=require('./mongoose')


const saveData = async () => {
    for (const { id, img, category, price } of data) {
      try {
        const Image = new Contemporary_image_Table({
          id,
          img,
          category,
          price
        });
        await Image.save();
        console.log(`Saved ${id}`);
      } catch (error) {
        console.error(`Error saving ${id}:`, error);
      }
    }
  };
  
  saveData();