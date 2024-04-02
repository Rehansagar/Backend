import 'dotenv/config'
import dotenv from "dotenv"
import mongoose from "mongoose"
import {DB_Name} from "./constants.js"
import  connectDB  from "./db/index.js"



connectDB();











/*import  express  from "express";
const app = express();
;( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        
        app.on("error",(error)=>{
            console.log("Error is:",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on PORT ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERRR",error);
        throw error;
    }
})();*/


