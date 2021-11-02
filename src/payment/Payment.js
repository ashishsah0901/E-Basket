import React, { useState, useEffect } from 'react'
import './payment.css'
import { useStateValue } from '../state/StateProvider'
import FlipMove from 'react-flip-move';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../state/reducer';
import axios from '../axios/axios';
import { db } from '../firebase';
import { doc, setDoc } from '@firebase/firestore';

const Payment = () => {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue()
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!error) {
            setProcessing(true);
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(async ({ paymentIntent }) => {
                if (paymentIntent) {
                    if (user) {
                        await setDoc(doc(db, 'users', user.uid, 'orders', paymentIntent.id), {
                            basket: basket,
                            amount: paymentIntent.amount,
                            created: paymentIntent.created
                        });
                    }

                    setSucceeded(true)
                    setError(null)
                    setProcessing(false)
                    dispatch({
                        type: 'EMPTY_BASKET'
                    })
                    history.replace('/orders')
                }
            }).catch(error => { alert(error.message) });
        }
    }
    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }
    console.log(getBasketTotal(basket));
    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    Checkout ({
                        <Link to='/checkout'>
                            {basket?.length} items
                        </Link>
                    })
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Plot no. 123, xyz society</p>
                        <p>Abc, Maharashtra</p>
                        <p>India, 123456</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_item">
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
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Methods</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                />
                                <button disabled={error || processing || disabled || succeeded || getBasketTotal(basket) <= 0} className='payment_payButton'>
                                    <span>{processing ? <p>Processing...</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
