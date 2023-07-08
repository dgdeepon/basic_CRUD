const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    phone:{type:Number,require:true}
},
  {
      versionKey:false
   }
);

const UserModel=mongoose.model('userData',userSchema);

module.exports=UserModel;