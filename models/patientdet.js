const mongoose=require("mongoose")
mongoose.set('strictQuery', true);

const PatientDet=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    guardian:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    guardianPhn:{
        type:Number,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    bloodg:{
        type:String,
        required:true

    },
    address:{
        type:String,
        required:true

    },
    height:{
        type:Number,
        required:true

    },
    weight:{
        type:Number,
        required:true

    },
    Occupation:{
        type:String,
        required:true

    },
    gender:{
        
    }
})

const PatientDetCol=new mongoose.model('PatientDetCol',PatientDet)
// 

module.exports=PatientDetCol
//