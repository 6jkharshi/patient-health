const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://850066879:cvbnm@cluster0.cql5csc.mongodb.net/signupdet?retryWrites=true&w=majority").then(()=>{
    console.log('mongodb connected');
})
.catch((e)=>{
    console.log('failed');
    console.log(e);
})
