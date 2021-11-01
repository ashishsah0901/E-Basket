import React from 'react'
import './checkoutProduct.css'
import { useStateValue } from '../state/StateProvider'

const CheckoutProduct = (props) => {
    const { id, title, image, price, rating } = props.element
    const [, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REEMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt="" />
            <div className='chectoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array.apply(null, { length: rating }).map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                    {Array.apply(null, { length: 5 - rating }).map((_, i) => (
                        <p key={i} className="checkoutProduct_rating_uncheck">⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove the item</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
