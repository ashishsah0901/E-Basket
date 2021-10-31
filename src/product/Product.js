import React from 'react'
import './product.css'

const Product = (props) => {
    const { title, image, price, rating } = props
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
            <button>Add to basket</button>
        </div>
    )
}

export default Product
