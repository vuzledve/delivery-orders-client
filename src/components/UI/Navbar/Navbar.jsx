import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link className="navbar_link" to="/CreateNewOrder">Создание нового заказа</Link>
                <Link className="navbar_link" to="/DeliveryOrdersList">Список заказов</Link>
            </div>
        </div>
    );
};

export default Navbar;