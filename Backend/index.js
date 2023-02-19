const express= require ('express')
const mongoose = require('mongoose')

const url = "mongodb+srv://TeamAMPTY:team_ampty@cluster0.pcpgnho.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log(err);
})

const app= express()

const port= 5000
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})