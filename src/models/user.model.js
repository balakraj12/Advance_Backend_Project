const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({        

    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: true
    },

    name
: {
        type: String,
        required: true,
        trim: true
    },


    password: {
        type: String,
        required: true,
        minlength:[6, 'Password must be at least 6 characters long'],     
        Select: false
    }
}, {
    timestamps: true    
});

