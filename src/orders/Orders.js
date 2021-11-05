import React, { useState, useEffect } from 'react'
import './orders.css'
import { db } from '../firebase';
import { useStateValue } from '../state/StateProvider'
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import Order from '../order/Order';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [{ user }] = useStateValue()
    useEffect(() => {
        if (user) {
            const q = query(collection(db, 'users', user.uid, 'orders'), orderBy('created', 'desc'));
            onSnapshot(q, (snapshot) => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        } else {
            setOrders([]);
        }
    }, [user]);
    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className="orders_order">
                {orders?.map(order => (
                    <Order key={order.id} order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
