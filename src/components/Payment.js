import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import Header from './Header'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider';
import "./Payment.css"
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format"
import axios from './axios';
import { db } from '../firebase';
import {collection, doc, setDoc} from "../firebase"

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useNavigate()


    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    
    useEffect(() => {
        const getClientSecret = async () =>{
            const response = await axios({
                method: "post",
                //Stripe expects the total in a currencies subunits for $ it expects cents
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();

    }, [basket])

    console.log("The secret is >>>", clientSecret)

    
    const handleSubmit = async (event) =>{
        //do all the fancy stripe stuff
        event.preventDefault();

        console.log("About to console.log the db")

        const userColl = collection(db, 'users')
        const userDoc = doc(userColl, user?.uid)
        const userColl2 = collection(userDoc, "orders")
        const userDoc2 = doc(userColl2, "12456666")
        setDoc(userDoc2, {
            basket: basket,
            amount: 300,
            created: "Today"
        })

        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
            //paymentIntent = payment confirmation
            console.log("About to console.log the db")

            const userColl = collection(db, 'users')
            const userDoc = doc(userColl, user?.uid)
            const userColl2 = collection(userDoc, "orders")
            const userDoc2 = doc(userColl2, paymentIntent.id)
            setDoc(userDoc2, {
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            
           
            console.log("The useDoc2 coll is ", userDoc2)


            /*
            db
            .collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            })*/

            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type: "EMPTY_BASKET"
            })

            history("/orders")
        })

    }

    const handleChange = event =>{
        //do all the stripe change stuff
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }
    

  return (
    <div>
        <Header />

        <div className="payment">
            
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/*Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{!user? "Guest" : user.email}</p>
                        <p>123 React Street</p>
                        <p>South Africa</p>
                    </div>
                </div>

                {/*Payment section - Review items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>

                {/*Payment section - Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__items">
                        {/* Stripe code goes here*/}
                        
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value)=>(
                                        <h3>Order Total: {value}</h3>
                                        
            
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                                <button type="submit">
                                    Order Now
                                </button>
                                {/* 
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p>:
                                    "Buy Now"}</span>
                                </button>
                                */}
                            </div>
                                
                                {/*error && <div>{error}</div>*/}
                            

                        </form>
                        
                    </div>


                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment