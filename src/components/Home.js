import React, {useState} from 'react'
import "./Home.css"
import Product from "./Product"
import Slider from "./slider/Slider"
import {SliderData} from "./SliderData"




function Home() {

    const [current, setCurrent] = useState(0);
    //const length = slides.length;
    return (
        <div>

            <Slider />
        <div className="home">
           
            <div className="home__container">
                
            <div className="home__row">
                <Product 
                    id="1"
                    title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
                    price={31.99}
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
                    rating={4}/>
                <Product 
                    id="1"
                    title="Baby Registry Welcome Box"
                    price={16.99}
                    image="https://m.media-amazon.com/images/I/41U2bOJ+lEL._AC_UL320_.jpg"
                    rating={3}/>
                
            </div>

            <div className="home__row">
                <Product 
                    id="1"
                    title="Smart Watch 2022(Call Receive/Dial), 1.70 in HD Full Touch Screen Smartwatch Fitness Tracker with Call/Text/Heart Rate (Black)"
                    price={65.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61YYNEvkCzL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    rating={5}/>
                <Product 
                    id="1"
                    title="65.6ft Led Lights for Bedroom dalattin Led Strip Lights Color Changing Lights with 44 Keys Remote,2 Rolls of 32.8ft"
                    price={17.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81tI0auKmTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    rating={4}/>
                <Product 
                    id="1"
                    title="8-Level Magnetic Resistance Exercise Bike Desk, Office Desk Workstation W/ Adjustable Desk & Leather Seat, Exercise Bikes With Desk W/ Build-In LCD Monitor, Home Exerwork Bike Max 285 Lbs"
                    price={239.99}
                    image="https://m.media-amazon.com/images/I/51D0uVBZRuS._AC_UL320_.jpg"
                    rating={4}/>
                {/*Product*/}
                {/*Product*/}
            </div>

            <div className="home__row">
                <Product 
                    id="1"
                    title="FITUEYES Height Adjustable Standing Desk Converter 32” Wide Sit to Stand Desk Tabletop Workstation, Black, SD308001WB"
                    price={119.99}
                    image="https://m.media-amazon.com/images/I/51Z4mzo+NKS._AC_SR160,160_.jpg"
                    rating={5}/>
                <Product 
                    id="1"
                    title="Apple iPhone 11 Pro, US Version, 64GB, Silver - Unlocked (Renewed)"
                    price={469.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Jf4uu-xzL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    rating={4}/>
                <Product 
                    id="1"
                    title="Calvin Klein Women's 2 Pack French Terry Joggers"
                    price={31.99}
                    image="https://m.media-amazon.com/images/I/51cdq8ZovBL._AC_UL320_.jpg"
                    rating={5}/>
                <Product 
                    id="1"
                    title="Oculus Link Virtual Reality Headset Cable for Quest 2 and Quest - 16FT (5M) - PC VR"
                    price={78.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/21JY-ntng7L._SX300_SY300_QL70_FMwebp_.jpg"
                    rating={5}/>
            </div>

            <div className="home__row">
                <Product 
                    id="1"
                    title="KGEZW Puppy Dog Cat Clothes Harness Leash Set Pet Harness Vest Dress for Small Medium Dogs Cats Chihuahua Dogs Cat Skirt Pet Supplies"
                    price={39.99}
                    image="https://m.media-amazon.com/images/I/51YlAawuwpL._AC_UL320_.jpg"
                    rating={5}/>
                <Product 
                    id="1"
                    title="BARKBAY Dog Harness, no Pull Dog Harness with 2 Leash Clips and Large ID Tag Pocket,Dog Harness Medium Large with Adjustable Soft Padded, Reflective No-Choke Dog Vest with Easy Control Handle(Blue,L)"
                    price={229.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/714jFNxPZXS.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    rating={5}/>
                <Product 
                    id="1"
                    title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB"
                    price={339.99}
                    image="https://m.media-amazon.com/images/I/61kwRNPtMpL._AC_UL320_.jpg"
                    rating={5}/>
            </div>

            <div className="home__row">
                <Product 
                    id="1"
                    title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
                    price={59.99}
                    image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
                    rating={4}/>
                <Product 
                    id="1"
                    title="AA Products Gaming Chair High Back Ergonomic Computer Racing Chair Adjustable Gamer Chair with Footrest, Lumbar Support Swivel Chair – BlackPurple"
                    price={169.99}
                    image="https://m.media-amazon.com/images/I/61GJAM+cYxL._AC_UL320_.jpg"
                    rating={5}/>
                
            </div>

            <div className="home__row">
                <Product 
                    id="1"
                    title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
                    price={226.99}
                    image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL320_.jpg"
                    rating={5}/>
            </div>
            </div>

            
        </div>
        
        </div>
    )
}

export default Home
