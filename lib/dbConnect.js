import mongoose from 'mongoose';

const MONGODB_URL = "mongodb+srv://Osama:bozo@alexez.acwo2.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Alexez";



const dbConnect = async () => {
 try{
  await mongoose.connect(MONGODB_URL);
  console.log("connected");


 }catch(error){
  console.log(error);
 }

};

export default dbConnect
