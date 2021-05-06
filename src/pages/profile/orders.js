import React, {useEffect, useState} from 'react';
import {Card, Image, ListGroup} from "react-bootstrap";
import {API_URL} from "../../services/apiService";
import axios from "axios";
import {USER} from "../../services/user/userService";
import CartItem from "../../components/CartItem";

function Orders() {
    const user = JSON.parse(localStorage.getItem(USER))
    const [orders, setOrders] = useState([])
    const fonction = async () => {
        const orderResp = await axios.get(API_URL + '/orders?user.id=' + user.id)
        setOrders(orderResp.data)
    }

    useEffect(() => {
         fonction()
    }, []);

    return (
        <>
            <h4>{"Bonjour, " + user.prenom + " 😀 - MES COMMANDES"}</h4>

            {orders.map((order, i) =>
                <Card key={i}>
                    <Card.Header as="h5">
                        {"Commande effectuée le : " + new Date(order.created_at).toLocaleDateString()}
                        <br/>
                        {"N° référence de la commande : " + order.reference}
                        <br/>
                        {"Prix Total : " }
                    </Card.Header>

                    <Card.Body>
                        <u>
                            <Card.Title>Détail de la commande</Card.Title>
                        </u>

                        { order.order_lines.map(order_line => <CartItem order_line={order_line} /> ) }
                    </Card.Body>
                </Card>
            )}
        </>
    );
}

export default Orders;