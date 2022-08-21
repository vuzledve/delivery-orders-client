import React, {useState} from 'react';
import OrderList from "../components/OrderList";
import OrderTable from "../components/OrderTable";

const DeliveryOrdersList = () => {

    return (
        <div className="App">
            {/*<OrderList/>*/}
            <OrderTable/>
        </div>
    );
};

export default DeliveryOrdersList;