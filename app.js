var Express=require('express')
var Mongoose=require('mongoose')

var Bodyparser=require('body-parser')
var{Bookmodel}=require('./Model/Bookmodel')

var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
app.get('/',(req,res)=>{
    res.send(" Welcome to my Book nodejs")
})

app.post('/read',(req,res)=>{
    var Boobobject=new Bookmodel(req.body)


res.json(Boobobject)
})
app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("servering")
})
