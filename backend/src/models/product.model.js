import mongoose, {Schema} from "mongoose";
console.log("running product.modles");
const product_schema = new Schema(
    {
        //_id:{
           // type:Number,
           // required:true,

       //},
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
     pro_image:{
        type:String,//cloudinary url
        required:true,
     },
     category: {
        type: String,
        required: true,
     },
     new_price:{
        type:Number,
        required:true,
     },
     old_price:{   
        type:Number,
        required:true,
     },
     date:{
        type:Date,
        default:Date.now,
     },
     available:{
      type:Number,
      required:true,
     },
},
{
    timestamps:true
}
)
export const Product = mongoose.model("Product", product_schema);