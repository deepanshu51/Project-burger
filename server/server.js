import main from "./main.js";
import {connectDB} from "./config/database.js";
import Razorpay from "razorpay";

connectDB();


export const instance = new Razorpay({ 
  key_id: process.env.RAZORPAY_API_KEY, 
  key_secret: process.env.RAZORPAY_API_SECRET,
 });


main.get("/",(req,res,done)=>{
    res.send("<h1>Working<h1>");
})

main.listen(process.env.PORT, ()=>
  console.log(`Server is working on PORT: ${process.env.PORT}, in ${process.env.NODE_ENV} Mode`)
);