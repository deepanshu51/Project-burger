import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import {errorMiddleware} from "./middlewares/errorMiddleware.js";
import cors from "cors";

const main = express();
export default main;

dotenv.config({
    path:"./config/config.env",
})

main.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized:false,

    cookie:{
        secure: process.env.NODE_ENV === "development" ? false : true,
        httpOnly: process.env.NODE_ENV === "development" ? false : true,
        sameSite:process.env.NODE_ENV === "development" ? false : "none",
    }
}));

main.use(cookieParser());
main.use(express.json());
main.use(express.urlencoded({
    extended: true,
})
);

main.use(passport.authenticate("session"));
main.use(passport.initialize());
main.use(passport.session());
main.enable("trust proxy");

connectPassport();
import userRoute from "./routes/user.js";
import orderRoute from "./routes/order.js";
import passport from "passport";

main.use(cors({
    credentials: true,
    origin:"http://localhost:3000",
    
    methods: ["GET","POST","PUT","DELETE"],
})
);


// main.use(express.json());
main.use("/api/v1",userRoute);
main.use("/api/v1",orderRoute);

main.use(errorMiddleware);