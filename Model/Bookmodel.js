var Mongoose=require('mongoose')
var Bookschema=new Mongoose.Schema({
btitle:{type:String,required:true},
bauthor:{type:String,required:true},
bprice:{type:String,required:true},
bdescription:{type:String,requires:true}
}

)
var Bookmodel=Mongoose.model('books',Bookschema)
module.exports={Bookmodel}