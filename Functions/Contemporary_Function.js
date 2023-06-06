const Access=async (id)=>{
    try{
        const result =await Contemporary_image_Table.findOne({ id })
        if(result){
            console.log(result.category)
        }
        else{
            console.log('Not found')
        }
    }
    catch(err){
        console.log(err)
    }
}


module.exports=Access