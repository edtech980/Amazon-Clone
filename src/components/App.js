import React, { useEffect } from "react"
//import Header from "./Header";
import Homepage from "./Homepage";
import {BrowserRouter, Routes,  Route} from "react-router-dom"
//import Switch from "react-switch";
import "./App.css"
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "../firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from "./Orders";

const promise = loadStripe("pk_test_51KBLTNFSD7gldMG8Zs3a1HVHmjtWBsXpfb0AxfkpCadEXl8kafTjxc3EtwBpUGk0NctzpF4q9wLXNb6Gv4sfYylx00vVNvG32x")




const App = () => {
    const [{}, dispatch] = useStateValue();
    
    useEffect(() => {
        //Will only run once when the app component loads...
        auth.onAuthStateChanged(authUser => {
            console.log("User is >>>", authUser);

            if(authUser){
                //The user just logged in / the user was logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser
                })


            } else{ 
                //The user is logged out 
                dispatch({
                    type: "SET_USER",
                    user: null
                })
            }

        })
    }, [])

    return (

        <div>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
                <Routes>
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>

                <Routes>
                    <Route path="/orders" element={<Orders />} />
                </Routes>
                 
                <Routes>
                   
                        <Route path="/payment" element={ <Elements stripe={promise}><Payment /></Elements> } />
                    
                </Routes>
            </BrowserRouter>  
        </div>
        
        
    )
}

export default App