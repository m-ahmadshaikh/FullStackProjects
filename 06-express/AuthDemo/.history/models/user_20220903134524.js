const mongoose =require('mongoose');


const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,'Username cannot be black']
        }
    }
)