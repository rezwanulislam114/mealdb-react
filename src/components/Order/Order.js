import React from 'react';
import './Order.css'

const Order = (props) => {
    // console.log(props.order)
    const order = props.order;
    
    return (
        <div>
            <h2>order items: {props.order.length}</h2>
            <ul>
                {
                    order.map(singleOrder => <li>{singleOrder.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default Order;