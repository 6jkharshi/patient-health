const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
const SignupSchemaDoctor=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const SignUpColDoctor=new mongoose.model('SignUpColDoctor',SignupSchemaDoctor)

module.exports=SignUpColDoctor
