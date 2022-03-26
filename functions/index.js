const functions = require("firebase-functions");

const express = require("express")

const cors = require("cors")

const stripe = require("stripe")("sk_test_51KBLTNFSD7gldMG8j1yCDJNfJzMROwVt2fBIc26kYV5mOtPhloDM4o17D17kqfnxaZhzfe8lqSgfz1kCSZJ99yAD00IjzqfeZ1")


//API

//App config
const app = express();

//Middlewares
app.use(cors({origin: true}))
app.use(express.json())

//API routes
app.get("/", (request, response) => response.status(200).send("Hello World"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received BOOM!!! for this amount >>>>", total)


    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-c5d17/us-central1/api