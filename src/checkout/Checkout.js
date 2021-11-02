import React from 'react'
import Subtotal from '../subtotal/Subtotal'
import './checkout.css'
import { useStateValue } from '../state/StateProvider'
import FlipMove from 'react-flip-move';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';

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
                    <FlipMove staggerDurationBy="30"
                        duration={500}
                        enterAnimation='fade'
                        leaveAnimation='fade'
                        typeName={null}>
                        {basket.map(item => (
                            <div key={item.key}>
                                <CheckoutProduct element={item} />
                            </div>
                        ))}
                    </FlipMove>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
