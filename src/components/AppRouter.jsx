import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {Routes} from "react-router";
import DeliveryOrdersList from "../pages/DeliveryOrdersList";
import CreateNewOrder from "../pages/CreateNewOrder";

const AppRouter = () => {
    return (
        <Routes>
                <Route path="/" element={ <DeliveryOrdersList/>}/>
                <Route path="/DeliveryOrdersList" element={ <DeliveryOrdersList/>}/>
                <Route path="/CreateNewOrder" element={ <CreateNewOrder/>}/>
        </Routes>
    );
};

export default AppRouter;