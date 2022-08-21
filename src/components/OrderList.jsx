import React, {useEffect, useState} from 'react';
import {createAPIEndpoint, ENDPOINTS} from "../api";
import OrderItem from "./OrderItem";



const OrderList = () => {
    const[orders, setOrders] = useState([])

    useEffect(()=>{
        createAPIEndpoint(ENDPOINTS.deliveryOrders)
            .fetch()
            .then(res=>{
                setOrders(res.data)
                console.log(res.data)
            })
            .catch(err=>{console.log(err);})
    },[])


    return (
        orders.length!=0
            ?
            <div className="order_list">
                <h1 style = {{textAlign:'center'}}>
                    Delivery Orders List
                </h1>
                {orders.sort((a, b) => a.orderNum > b.orderNum ? 1 : -1).map((order, index)=>
                    <OrderItem order={order} key={order.orderNum}/>
                )}
            </div>

        :null
    );
};

export default OrderList;
