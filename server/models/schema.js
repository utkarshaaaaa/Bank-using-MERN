const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
//schema for user db
const userschema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    account_number:{
        type:Number,
        require:true,
        unique : true
        

    },
    amount:{
        type:Number,
        require:true,
        default:0

    },


    pic:{
        type:String,
        require:true,
        

    },
    dob:{
        type:String,
        require:true

    },
    token:{
        type:String,
        require:true
    },
    send_acc_no:{
        type:Number,
        require:true,
        default:"helllooo"
    }

    
})
    userschema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)

})
//checking hash passoword
userschema.methods.matchPassword=async function(enterpassword){
    return await bcrypt.compare(enterpassword,this.password)
}

const user=mongoose.model('users',userschema)

module.exports=user