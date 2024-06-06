// ../config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;


const connectToDatabase = async () => {
    try {
        const con = await mongoose.connect(MONGO_URL);
        console.log(`Database connected successfully: ${con.connection.host}`);
    } catch (err) {
        console.log(`Error detected while connecting to database: ${err}`);
    }
};

export default connectToDatabase; // Exporting the function as default
