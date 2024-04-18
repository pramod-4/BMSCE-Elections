const mongoose=require('mongoose')

const candiSchema = new mongoose.Schema({
  usn:{type: String,required:true},
  candiId: { type: String , unique:true },
  pos:{type:String},
  password: { type: String, required: true },
  fname: { type: String },
  lname: { type: String },
  department: { type: String },
  image: { type: String },
  gender: { type: String },
  age: { type: Number },
  semester: { type: String },
  skills: { type: [String] },
  quote: { type: String },
  about: { type: String },
  email: { type: String },
  votes: { type: Number}
});

module.exports=mongoose.model('Candidate',candiSchema)