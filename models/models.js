import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Username is required.'],
        unique: true,
    },
   
    password: {
        type: String,
        required: [true, 'Password is required.'],
        select: false,
        minlength: [8, 'Password must be at least 8 characters long.']
    },
    
});


const userModel = mongoose.model('User', userSchema)
export default userModel;
