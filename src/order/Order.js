import React from 'react'
import './order.css'
import moment from 'moment';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct'
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created.integerValue).format('MMMM Do YYYY, h:mma')}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket.arrayValue.values.map(item => (
                <CheckoutProduct key={item.mapValue.fields.key.stringValue} hideButton={true} element={{
                    key: item.mapValue.fields.key.stringValue,
                    id: item.mapValue.fields.id.stringValue,
                    title: item.mapValue.fields.title.stringValue,
                    image: item.mapValue.fields.image.stringValue,
                    price: item.mapValue.fields.price.integerValue,
                    rating: item.mapValue.fields.rating.integerValue
                }} />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className='order_total'>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount.integerValue / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
        </div>
    )
}

export default Order
