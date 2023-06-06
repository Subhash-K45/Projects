const mongoose=require('mongoose')
const data=require('../Data/Mixed_Media_Works')
const {Mixed_Art}=require('./mongoose')


const saveData=async function(){
    for(let {id,img,category,price,name} of data){
        try{
            const Image=new Mixed_Art({
                id,
                img,
                category,
                price,
                name
            })
            await Image.save()
            console.log(`Saved ${id}`)
        }catch(err){
            console.log(error)
        }
    }
}
saveData()