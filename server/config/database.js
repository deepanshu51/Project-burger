import mongoose from "mongoose";
mongoose.set("strictQuery", false);
export const connectDB = async()=>{
    // 
    const { connection} =await mongoose.connect(process.env.MONGO_URI)
    // .then(
    //     () => {
            console.info(`Connected to database ${connection.host}`)
        // },
        // error => {
        //     console.error(`Connection error: ${error.stack}`)
        //     process.exit(1)
        // }
    // )
}