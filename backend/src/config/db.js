import mongoose  from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSWORLD}@${process.env.CLUSTER}/${process.env.PASTE}`)
        console.log('Conectado');
    }catch(err){
        console.log(err);
    }
}
connectDB()
export default mongoose