import React from 'react'
import './home.css'
import Product from '../product/Product'

export const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Banner" />
                <div className="home_row">
                    <Product id="31102021-1" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={1966.00} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" />
                    <Product id="31102021-2" title="eufy by Anker, RoboVac X8 Hybrid, Robot Vacuum and Mop Cleaner with iPath Laser Navigation, Twin-Turbine Technology generates 2000Pa x2 Suction, AI. Map 2.0 Technology, Wi-Fi, Perfect for Pet Owner" price={31999.00} rating={5} image="https://m.media-amazon.com/images/I/713rjcYi9dL._SX425_.jpg" />
                </div>
                <div className="home_row">
                    <Product id="31102021-3" title="PHILIPS HP8302 Selfie Straightener (Black)" price={999.00} rating={4} image="https://m.media-amazon.com/images/I/714hrEDP8uL._SY450_.jpg" />
                    <Product id="31102021-3" title="RE Enterprise Women's Latest Black Embroidery Maxi Georgette Sequence Long Dress Gown" price={1199.00} rating={4} image="https://m.media-amazon.com/images/I/6142tbfHTDL._UX466_.jpg" />
                    <Product id="31102021-5" title="Gauri Laxmi Enterprise Men's Cotton Blend Straight Kurta" price={429.00} rating={3} image="https://m.media-amazon.com/images/I/51++cxHDe6L._UX425_.jpg" />
                </div>
                <div className="home_row">
                    <Product id="31102021-5" title="Acer Nitro 5 11th Gen Intel Core i5-11400H 15.6-inch (39.62 cms) FHD 144Hz Gaming Laptop (16GB/RTX 3050 Graphics/1TB HDD + 256GB SSD/Win10/Black/2.4 Kg/RGB Backlit), AN515-57+ Xbox Game Pass for PC" price={75990.00} rating={4} image="https://m.media-amazon.com/images/I/71evs2WKJjS._SX450_.jpg" />
                </div>
            </div>
        </div>
    )
}
