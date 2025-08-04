/*const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();

// Convert data into JSON format
app.use(express.json());
// Serve static files (e.g., CSS, JS)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// Use EJS as the view engine
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
    res.render("home");
});

// Home route (GET /) - renders the login page
app.get("/", (req, res) => {
    res.render("login");
});

// Signup route (GET /signup) - renders the signup page
app.get("/signup", (req, res) => {
    res.render("signup");
});

// Register User (POST /signup)
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    // Define strong password criteria
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    // Validate the password
    if (!passwordRegex.test(data.password)) {
        return res.json({
            errorMessage: "Password must be at least 8 characters long and include numbers, special characters, uppercase, and lowercase letters.",
            data: data
        });
    }

    // Check if the username already exists in the database
    const existingUser = await collection.findOne({ name: data.name });

    if (existingUser) {
        return res.json({
            errorMessage: "User already exists. Please choose a different username.",
            data: data
        });
    } else {
        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword;

        // Insert the new user into the database
        const userdata = await collection.insertMany([data]);
        console.log(userdata);

        // Send verification email with login link
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.Email_User,
                pass: process.env.Email_Password,
            },
        });

        const mailOptions = {
            from: process.env.Email_User,
            to: data.email,
            subject: "Welcome to the Website - Login Link",
            text: `Hello ${data.name},\n\nThank you for registering on our website. Please click the link below to login:\n\nhttp://localhost:5000/`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log("Error Occurred:", error);
            }
            console.log("Email sent successfully:", info.response);
        });

        res.json({ successMessage: "User registered successfully! Please check your email to login." });
    }
});

// Login user (POST /login)
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            return res.json({ success: false, message: "Username cannot be found" });
        }

        // Compare the hashed password from the database with the plaintext password
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            return res.json({ success: false, message: "Wrong Password" });
        } else {
            return res.json({ success: true, message: "Login successful", redirect: "/home" });
        }
    } catch (err) {
        return res.json({ success: false, message: "An error occurred. Please try again later." });
    }
});

app.get("/forgotpass", (req, res) => {
    res.render("forgotpass");
});

// Handle forgot password request (send reset email)
app.post('/forgotpass', async (req, res) => {
    const { email } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.Email_User,
                pass: process.env.Email_Password,
            },
        });

        const mailOptions = {
            from: process.env.Email_User,
            to: email,
            subject: 'Password Reset Request',
            text: `Click the link below to reset your password:\n\nhttp://localhost:5000/resetpass?email=${email}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('Error occurred:', error);
            }
            console.log('Reset password email sent:', info.response);
            res.json({ success: true, message: 'Password reset link has been sent to your email.' });
        });
    } catch (error) {
        console.log('Error sending email:', error);
        res.json({ success: false, message: 'An error occurred while sending the reset email. Please try again.' });
    }
});

// Render Reset Password Page (GET /resetpass)
app.get("/resetpass", (req, res) => {
    const { email } = req.query;
    res.render("resetpass", { email });
});

// Handle Reset Password (POST /resetpass)
app.post('/resetpass', async (req, res) => {
    const { email, newPassword, confirmPassword } = req.body;

    // Check if the passwords match
    if (newPassword !== confirmPassword) {
        return res.json({ success: false, message: 'Passwords do not match.' });
    }

    try {
        // Hash the new password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

        // Update the user's password in the database
        const result = await collection.updateOne(
            { email: email },
            { $set: { password: hashedPassword } }
        );

        console.log("Update Result:", result);
        if (result.modifiedCount > 0) {
            res.json({ success: true, message: 'Password successfully updated. Please log in again.' });
        } else {
            res.json({ success: false, message: 'Failed to update password. Please try again.' });
        }
    } catch (err) {
        console.error(err);
        res.json({ success: false, message: 'An error occurred while resetting the password. Please try again.' });
    }
});

// Define Port for Application
const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); */


require("dotenv").config();
const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET



const app = express();

const allowedOrigins = ['http://localhost:3000',
    'https://aapno-sathi.vercel.app']


// Convert data into JSON format
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


// Use EJS as the view engine
app.set("view engine", "ejs");

// Home route (GET /home)
app.get("/home", (req, res) => {
    res.render("home");
});

// Login page (GET /)
app.get("/", (req, res) => {
    res.render("login");
});

// Signup page (GET /signup)
app.get("/signup", (req, res) => {
    res.render("signup");
});

// Register User (POST /signup)
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    // Define strong password criteria
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    // Validate the password
    if (!passwordRegex.test(data.password)) {
        return res.json({
            errorMessage: "Password must be at least 8 characters long and include numbers, special characters, uppercase, and lowercase letters.",
            data: data
        });
    }

    // Check if the username already exists in the database
    const existingUser = await collection.findOne({ name: data.name });

    if (existingUser) {
        return res.json({
            errorMessage: "User already exists. Please choose a different username.",
            data: data
        });
    } else {
        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword;

        // Insert the new user into the database
        const userdata = await collection.insertMany([data]);
        console.log(userdata);

        // Send verification email with login link
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.Email_User,
                pass: process.env.Email_Password,
            },
        });

        const mailOptions = {
            from: process.env.Email_User,
            to: data.email,
            subject: "Welcome to the Website - Login Link",
            text: `Hello ${data.name},\n\nThank you for registering on our website. You can log in using one of the links below:

           🔗 Localhost (for development): http://localhost:7000/

           🌐 Live Website: https://your-vercel-project.vercel.app/
           `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log("Error Occurred:", error);
            }
            console.log("Email sent successfully:", info.response);
        });

        res.json({ successMessage: "User registered successfully! Please check your email to login." });
    }
});


// Send OTP for login (POST /send-otp)
app.post("/send-otp", async (req, res) => {
    const { name } = req.body;

    try {
        const user = await collection.findOne({ name });

        if (!user) {
            return res.json({ errorMessage: "Username not registered." });
        }

        const otp = crypto.randomInt(100000, 999999); // Generate OTP
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // Valid for 10 minutes

        // Save OTP and expiry to DB
        await collection.updateOne(
            { name },
            { $set: { otp, otpExpiry } }
        );

        // Send OTP to email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.Email_User,
                pass: process.env.Email_Password,
            },
        });

        const mailOptions = {
            from: process.env.Email_User,
            to: user.email,
            subject: "Your OTP for Login",
            text: `Hello ${user.name},\n\nYour OTP for login is: ${otp}. It will expire in 10 minutes.`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error Occurred:", error);
                return res.json({ errorMessage: "Failed to send OTP. Please try again." });
            }
            res.json({ successMessage: "OTP sent to email for login." });
        });
    } catch (err) {
        console.error(err);
        res.json({ errorMessage: "An error occurred. Please try again later." });
    }
});


// Login User (POST /login)
app.post("/login", async (req, res) => {

    try {
        const { name, password } = req.body;
        console.log(req.body)

        const user = await collection.findOne({ name });

        if (!user) {
            return res.json({ errorMessage: "Username not registered." });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (isPasswordMatch) {
            const token = jwt.sign({ name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.json({ successMessage: "Login successful!", token });
        } else {
            res.json({ errorMessage: "Incorrect password." });
        }
    } catch (err) {
        console.error(err);
        res.json({ errorMessage: "An error occurred. Please try again later." });
    }
});



// Verify Login OTP (POST /verify-login-otp)
app.post("/verify-login-otp", async (req, res) => {
    const { name, otp } = req.body;

    try {
        const user = await collection.findOne({ name });

        if (!user || user.otp !== parseInt(otp)) {
            return res.json({ errorMessage: "Invalid OTP." });
        }

        if (user.otpExpiry < Date.now()) {
            return res.json({ errorMessage: "OTP has expired. Please request a new one." });
        }

        // Invalidate OTP after successful login
        await collection.updateOne(
            { name },
            { $set: { otp: null, otpExpiry: null } }
        );

        const token = jwt.sign({ name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ successMessage: "Login successful.", token });
    } catch (err) {

        console.error(err);
        res.json({ errorMessage: "An error occurred. Please try again later." });
    }
});


// Define Port for Application
const port = 7000;
app.listen(port, () => {

    console.log(`Server running on port ${port}`);
});



