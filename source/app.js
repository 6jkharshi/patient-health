const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
require("../config/connect")
const SignUpCollPatient=require("../models/patient")
const SignUpColDoctor=require("../models/doctor")
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path))
app.set("view engine", "hbs"); 
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/about", (req, res) => {
  res.render("about");
});


app.get("/", (req, res) => {
    res.render("index");
  });

app.get("/logInPatient", (req, res) => {
    res.render("logInPatient");
  });

app.get("/signUpPatient", (req, res) => {
    res.render("signUpPatient");
  });


app.get("/logInDoctor", (req, res) => {
    res.render("logInDoctor");
  });

app.get("/signUpDoctor", (req, res) => {
    res.render("signUpDoctor");
  });


app.post("/doctorportal",async(req, res) => {
  // res.render("Login");
  const data={
   user:req.body.user,
   email:req.body.email,
   password:req.body.password
  }
  console.log("please wait i am working patient")
 await SignUpColDoctor.insertMany([data])
 res.status(201).render("doctorportal", {
  naming: req.body.user
})
});
 

 app.post("/logInDoctor",async(req, res) => {
    try{
  const check =await SignUpColDoctor.findOne({email:req.body.email});
  if (check.password===req.body.password){
  
    res.render("about") 
  }
  else{
    res.send("wrong password")
  }
    }
    catch{
  res.send("wrong details")
    }
    
  });


app.post("/patientportal",async(req, res) => {
  // res.render("Login");
  const data={
   user:req.body.user,
   email:req.body.email,
   password:req.body.password
  }
  console.log("please wait i am working patient")
 await SignUpCollPatient.insertMany([data])
 res.status(201).render("patientportal", {
  naming: req.body.user
})
});
 

 app.post("/logInPatient",async(req, res) => {
    try{
  const check =await SignUpCollPatient.findOne({email:req.body.email});
  if (check.password===req.body.password){
  
    res.render("about") 
  }
  else{
    res.send("wrong password")
  }
    }
    catch{
  res.send("wrong details")
    }
    
  });

  
app.listen(port, () => {
    console.log(`server ${port}`);
  });