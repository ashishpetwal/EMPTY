const express= require('express')
const router=express.Router()
const {body, validationResult}=require('express-validator')
router.post('/signup',[
    body('email',"Enter a valid email").isEmail()

],
async(req,res)=>{
      
    
    try {
        const errors=validationResult(req)
     if(!errors.isEmpty()){
        return res.status(400).json({error:"enter a valid email"})
     }
     
    } catch (error) {
        return res.status(500).json({error:'internal server error'})
      }
})