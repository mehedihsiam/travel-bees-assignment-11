import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrderList(data));
    }, [orderList]);
    // console.log(orderList)
    return (
        <div>
            {
                orderList.map(order => <h5>{order.packageName}</h5>)
            }
        </div>
    );
};

export default MyOrders;