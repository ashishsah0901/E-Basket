import React from 'react'
import './product.css'
import { useStateValue } from '../state/StateProvider'

const Product = (props) => {
    const { id, title, image, price, rating } = props
    const [, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>&#x20B9;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array.apply(null, { length: rating }).map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                    {Array.apply(null, { length: 5 - rating }).map((_, i) => (
                        <p key={i} className="product_rating_unchecked">⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
