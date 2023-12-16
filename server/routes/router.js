const express=require('express')
const SECRET_KET="HELLO"
const jwt=require('jsonwebtoken')      
const bcrypt=require('bcryptjs')
const asynchandler=require('express-async-handler')
const router=express.Router()
const user = require('../models/schema')


//input data in db and register
router.route('/reg').post(asynchandler(async(req,res)=>{
    const{name,email,password,account_number,amount,pic,dob,send_acc_no}=req.body
    const userexist= await user.findOne({email:email})
    if(userexist){
        res.status(400).json({message:"user already exist"})
        throw new Error("user already exist")
        

    }
    const actualuser= await user.create({
        name,
        email,
        password,
        account_number,
        amount,
        pic,
        dob,
        send_acc_no
        
    })
    if(actualuser){
       // res.status(200).json({
            //name:actualuser.name,
            //email:actualuser.email,
            //password:actualuser.password,
            //account_number:actualuser.account_number,
            //amount:actualuser.amount,
            //pic:actualuser.pic,
            
           
    //})
    const tokenreg= jwt.sign({email:actualuser.email,id:actualuser._id},SECRET_KET)
        res.status(201).json({user:actualuser,token:tokenreg})
         

    }
    

}))
//login user
router.route('/login').post(asynchandler(async(req,res)=>{
    const{email,password}=req.body
    const userindb=await user.findOne({email:email })
    if(!userindb){
        return res.status(404).json({message:"notfound"})
    }
    const matchpassword=  await bcrypt.compare(password,userindb.password)

    if(!matchpassword){
        return res.status(400).json({message:"invalid_password"})
    }
    else{

        //res.json({
            //name:userindb.name,
            //email:userindb.email,
            //account_number:userindb.account_number,
            //amount:userindb.amount,
           // pic:userindb.pic,
            //dob:userindb.dob
            

        //})
        const token= jwt.sign({email:userindb.email,id:userindb._id},SECRET_KET)
        res.status(201).json({user:userindb,token:token})
        //res.cookie("jwt",token,{
            //expires:new Date(Date.now() + 5000000000),
            //httpOnly:true
        //})      

    }


   
}))

//update the amount by giving the account number

router.route('/change/:account').put(async(req,res)=>{
    const{ammount,useracc_no}=req.body
    const user_account_number=await user.findOne({account_number:req.params.account })
    const current_user_account_number= await user.findOne({account_number:useracc_no})

    if(!user_account_number){
        return res.status(400).json({message:"wrong account number"})
    }
    if(!current_user_account_number){
        return res.status(400).json({message:"wrong account number"})
    }
    if(req.params.account===useracc_no){
        return res.status(400).json({message:"same account number as yours is not allowed"})
    }
    if(current_user_account_number.amount >parseFloat(ammount)){

        const balance_of_reciever=parseFloat(ammount) + user_account_number.amount
        

         await user.updateMany({account_number:req.params.account},{$set:{amount:balance_of_reciever}})
        .then(re=>res.status(200).json({re}))
        .catch(err=>res.json(err))
        console.log(current_user_account_number.amount)
        
        //if(parseInt(ammount)>current_user_account_number.amount){
            //console.log("true")
        //}else{
           // console.log("false")
        //}      
    }else{
        return res.status(400).json({message:"no_balance"})
        
    }

})

//update amount in db

router.route('/update_amount').put(async(req,res)=>{
    const{ammount,useracc_no,current_user_accno}=req.body
    const current_user_account_number= await user.findOne({account_number:useracc_no})
    const user_actual_amount=current_user_account_number.amount

    if(ammount){
    setTimeout(()=>{
        const user_amount=current_user_account_number.amount - parseFloat(ammount)
        user.updateOne({account_number:useracc_no},{$set:{amount:user_amount}})
        .then(re=>res.status(200).json({amount:user_amount}) )
        .catch(e=>res.json(e))
        console.log(user_amount)

    },500)
    }
    
   

})

//get the amount for the user
router.route('/get_user_amount/:user_account').post(async(req,res)=>{
    const{curr_acc}=req.body
    if(curr_acc==req.params.user_account)
    {
    const user_data=await user.findOne({account_number:req.params.user_account})
    res.status(200).json({amount:user_data.amount})}

    else{
        res.status(400).json({"message":"not your account number"})
    }
    console.log(curr_acc)

})


//get aspecific data
 router.route('/get/:email').get(async (req,res)=>{
    
    const user_data=await user.findOne({email:req.params.email})
    res.status(200).json({
        name:user_data.name,
        email:user_data.email,
        account_number:user_data.account_number,
        amount:user_data.amount,
        pic:user_data.pic,
        dob:user_data.dob
        
    })
    


})

//recievers account number for history

router.route('/history').post(async(req,res)=>{
    const{send_acc_no}=req.body
    const data_set_history= await user.create({
        send_acc_no
    })

    const data_of_reciever=await user.findOne({send_acc_no:send_acc_no})
    let currentdate = new Date(); 
    let datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    const recievers_name=data_of_reciever.name
    const ammount=ammount
   

    
    console.log(data_set_history)

   



  

 })






module.exports=router