import React from "react";
import Header from "./Header"
import "./Checkout.css"
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
      <div>

        <Header />

        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/multi-product/Valentines_Day/TrafficDrivers/BGC/VD22_GCLP_1024x90_US_EN.jpg" alt="Amazon-ad" />

              <div>
                <h3>Hello, {!user? "Guest": user.email}</h3>
                <h2 className="checkout__title">
                  Your Shopping Basket
                </h2>

                {basket.map(item =>
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />)}
              
                

              </div>
            </div>

            <div className="checkout__right">
            
              <Subtotal />
            </div>
        </div>
      </div>
    );
}

export default Checkout;
