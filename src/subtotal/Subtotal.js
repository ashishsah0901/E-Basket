import React, { useState, useEffect } from 'react'
import './subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../state/StateProvider'

const Subtotal = () => {
    const [{ basket }] = useStateValue()
    const [sum, setSum] = useState(0);
    useEffect(() => {
        let sum = 0;
        basket.forEach(item => {
            sum += item.price;
        });
        setSum(sum);
    }, [basket]);
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={sum}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal
