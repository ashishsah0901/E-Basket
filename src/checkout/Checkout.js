import React from 'react'
import Subtotal from '../subtotal/Subtotal'
import './checkout.css'

const Checkout = () => {
    return (
        <div className='ckeckout'>
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Jupiter21/Phase4/Lepton/Revised/Eng/acq_pc_3m.jpg" alt="" />
                <div>
                    <h2 className='ckeckout_title'>
                        Your Shopping Basket
                    </h2>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
