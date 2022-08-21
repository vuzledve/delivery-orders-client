import React, {useEffect, useState} from 'react';
import {createAPIEndpoint, ENDPOINTS} from "../api";
import OrderItem from "./OrderItem";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Center from "./Center";

const OrderTable = () => {
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

    function dateFilter(props) {
        return props.split('T')[0];
    }

    return (
        orders.length!=0
            ?
            <Center>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Num</TableCell>
                            <TableCell align="center">Город отправителя</TableCell>
                            <TableCell align="center">Адрес отправителя</TableCell>
                            <TableCell align="center">Город получателя</TableCell>
                            <TableCell align="center">Адрес получателя</TableCell>
                            <TableCell align="center">Вес груза&nbsp;(kg)</TableCell>
                            <TableCell align="center">Дата забора груза</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.sort((a, b) => a.orderNum > b.orderNum ? 1 : -1).map((order) => (
                            <TableRow
                                key={order.orderNum}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <strong>{order.orderNum}</strong>
                                </TableCell>
                                <TableCell align="center">{order.senderCity}</TableCell>
                                <TableCell align="center">{order.senderAddress}</TableCell>
                                <TableCell align="center">{order.recipientCity}</TableCell>
                                <TableCell align="center">{order.recipientAddress}</TableCell>
                                <TableCell align="center">{order.cargoWeight}</TableCell>
                                <TableCell align="center">{dateFilter(order.datePickup)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Center>
            :null
    );
};

export default OrderTable;