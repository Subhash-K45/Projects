const express=require('express')

const app=express()
const router=require('./Router/Router')
const PORT=3000


app.use(router)


app.listen(PORT,()=>{
    console.log(`App is listening to ${PORT}`)
});
