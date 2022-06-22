var Express=require('express')
var Mongoose=require('mongoose')

var Bodyparser=require('body-parser')
var{Bookmodel}=require('./Model/Bookmodel')
Mongoose.connect("mongodb+srv://kavya:12345@cluster0.2q4qp.mongodb.net/bookflutterdb",{useNewUrlparser:true})

var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
app.get('/',(req,res)=>{
    res.send(" Welcome to my Book nodejs")
})
app.post('/search',async(req,res)=>{
    try{
var  result=await Bookmodel.find(req.body)
res.json(result)

    }
    catch(error){
        res.json({"status":"error"})
    }
})
app.get('/view',async(req,res)=>{
    try{
        var result= await Bookmodel.find()
        res.json(result)
    }
    catch(error){
        res.json(error)
    }

   
})
app.post('/delete',async(req,res)=>{
    try{
        var result=await Bookmodel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }
    catch(error){
        res.json(error)
    }
})

app.post('/edit',async(req,res)=>{
    try{
        var result=await Bookmodel.findOneAndUpdate({"_id":req.body._id},req.body)
        res.json(result)

    }
    catch(error){
        {
res.json({"status":"error"})
        }
    }
})

app.post('/read',(req,res)=>{
    var Boobobject=new Bookmodel(req.body)
    Boobobject.save((error)=>{
        if(error){
            res.send({"status":error})

        }
        else
        {
res.send({"status":"success"})
        }
    })


})
app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("servering")
})
