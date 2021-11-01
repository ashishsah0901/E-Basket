import React from 'react'
import Subtotal from '../subtotal/Subtotal'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../state/StateProvider'

const Checkout = () => {
    const [{ basket, user }] = useStateValue()
    return (
        <div className='ckeckout'>
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Jupiter21/Phase4/Lepton/Revised/Eng/acq_pc_3m.jpg" alt="" />
                <div>
                    {user && <h3 className='ckeckout_title_email'>Hello, {user.email}</h3>}
                    <h2 className='ckeckout_title'>
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => {
                        return <CheckoutProduct id={item.id} element={item} />
                    })}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
