const mongoose=require('mongoose')
const data=require('../Data/Sculptures')
const {Sculpture_image_table}=require('./mongoose')

const saveData=async function(){
    for(let{id,img,category,price}of data){
        try{
            const Sculpture= new Sculpture_image_table({
                id,
                img,
                category,
                price
            })
            await Sculpture.save()
            console.log(`Saved ${id}`)
        }catch(err){
            console.log(err)
        }
    }
    
}

saveData()