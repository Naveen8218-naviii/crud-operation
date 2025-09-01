const express= require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const usermodel=require('./model/user')

const app=express()
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://nc319631:naveen%40123@crud.bhxmzqy.mongodb.net/?retryWrites=true&w=majority&appName=CRUD")
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

app.get('/',(req,res)=>{
  usermodel.find({})
  .then(users=>res.json(users))
  .catch(err=>res.json(err))
})

app.post("/createuser",(req,res)=>{
usermodel.create(req.body)
.then(users=>res.json(users))
.catch(err=>res.json(err))
})

app.get("/getuser/:id",(req,res)=>{
  const id=req.params.id;
  usermodel.findById({_id:id})
  .then(users=>res.json(users))
.catch(err=>res.json(err))
})

app.put("/updateuser/:id",(req,res)=>{
  const id=req.params.id;
  usermodel.findByIdAndUpdate({_id: id} ,{name:req.body.name,
    email:req.body.email,
    age:req.body.age})
     .then(users=>res.json(users))
.catch(err=>res.json(err))
})

app.delete("/deleteuser/:id",(req,res)=>{
  const id=req.params.id;
  usermodel.findByIdAndDelete({_id:id})
    .then(users=>res.json(res))
.catch(err=>res.json(err))
})
app.listen(4000,()=>{
    console.log("app listening")
})