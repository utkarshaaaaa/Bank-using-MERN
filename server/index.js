const express=require('express')
const clientmodel=require('./models/schema')
const router=require('./routes/router')
const cors=require('cors')
const moongose=require('mongoose')
const app=express()


app.use(express.json());

app.use(cors())
//connection
moongose.connect('mongodb://127.0.0.1:27017/jwt')
//running server
app.use('/',router)

app.listen(3001,()=>{
    console.log("server is runing")
})