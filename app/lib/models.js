import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type:String,
    required:true,
    unique:true,
    min:3,
    max:20 },
  username:{
    type:String,
    required:true,
    unique:true,
    min:3,
    max:20
  },
  img:{
    type:String,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  password: { type: String, required: true },
  id: { type: String },
  isActive:{
    type:Boolean,
    default:true
  },
  phone:{
    type:String,
    required:false
  },
  address:{
    type:String,
    required:false
  }
},
{
  timestamps: true,
}
);


const productSchema = mongoose.Schema({
  title: { type:String,
    required:true,
    unique:true,
   },
  description:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
    min:0
  },
  stock:{
    type:Number,
    required:true,
    min:0
  },
  img:{
    type:String,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  id: { type: String },
  isActive:{
    type:Boolean,
    default:true
  },
  color:{
    type:String,
    required:false
  },
  size:{
    type:String,
    required:false
  }
},
{
  timestamps: true,
}
);

export const User = mongoose.models.User ||  mongoose.model("User", userSchema);
export const Product = mongoose.models.Product ||  mongoose.model("Product", productSchema);