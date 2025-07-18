
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const connectDB = require('./config/db')
const router = require('./routes');
const contactUsRouter = require('./routes/contactUsRoutes');



const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)
app.use("/contactUs",contactUsRouter)

//stripe
app.use(bodyParser.json());

// Route to create a payment session
// app.post('/create-payment-session', );

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
