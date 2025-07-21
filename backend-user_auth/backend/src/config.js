const mongoose = require("mongoose");

// Connect to the MongoDB database
const connect = mongoose.connect(process.env.MONGO_URL);

// Check if the database is connected successfully
connect
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch(() => {
        console.log("Database cannot be Connected");
    });

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        //unique: true, // Ensure email uniqueness
    },
    password: {
        type: String,
        required: true,
    },
    otp: {
        type: Number, // To store OTP
        default: null, // OTP will be null when not in use
    },
    otpExpiry: {
        type: Date, // To track OTP expiry
        default: null,
    },
});

// Collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;
