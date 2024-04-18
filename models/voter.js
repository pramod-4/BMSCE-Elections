const mongoose=require('mongoose')

const voterSchema= new mongoose.Schema({
    "usn":{type: String , required:true ,unique:true} ,
    "password":{type: String , required:true},
    "confirmpass":{type: String , required:true},
    "voted":{type:Boolean,default:false}
})

module.exports=mongoose.model('Voter',voterSchema)