import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://AryanBaheti:Aryan123@cluster0.2uhux87.mongodb.net/food-del-avi').then(()=>console.log("DB connected"));
}
