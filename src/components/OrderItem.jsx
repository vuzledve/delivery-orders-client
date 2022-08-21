import React, {useEffect, useState} from 'react';

const OrderItem = (props) => {

    function dateFilter(props) {
        return props.split('T')[0];
    }

    return (
        <div>
            <div className="order">
                <div className="order__content">
                    <strong>{props.order.orderNum}. </strong>
                    <div>
                        {props.order.senderCity}<br/>
                        {props.order.senderAddress}<br/>
                        {props.order.recipientCity}<br/>
                        {props.order.recipientAddress}<br/>
                        {props.order.cargoWeight}<br/>
                        {dateFilter(props.order.datePickup)}<br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;
