import mongoose from "mongoose";

export const connectDatabase = () => {

    let MONGO_URI =""

    // if(process.env.NODE_ENV === "DEVELOPMENT")  MONGO_URI = process.env.MONGO_LOCAL_URI
    if(process.env.NODE_ENV === "PRODUCTION")  MONGO_URI = process.env.MONGO_URI
 
    mongoose.connect(MONGO_URI).then((con) => {
        console.log(`MongoDB Database connected with HOST: ${con?.connection?.host}`);
    })
}

