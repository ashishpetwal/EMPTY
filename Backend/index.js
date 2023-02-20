const express= require ('express')
const mongoose = require('mongoose')
const connectDatabase = require('./DB');
const cors = require('cors');

connectDatabase();


const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./Routes/auth'));

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})