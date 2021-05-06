import React from 'react';
import {Image, ListGroup} from "react-bootstrap";
import {API_URL} from "../services/apiService";

function CartItem({order_line}) {
    console.log(order_line)
    return (
        <div className={"row mb-5"}>

            <div className={"col-8"}>
                <ListGroup horizontal className="my-2">
                    <ListGroup.Item>{"Produit : " + order_line.titreArticle}</ListGroup.Item>
                    <ListGroup.Item>{"Prix: " + order_line.prix + "0€"}</ListGroup.Item>
                    <ListGroup.Item>{"Quantité: " + order_line.qte}</ListGroup.Item>
                    <ListGroup.Item
                        variant={"success"}>{"Prix Total: " + order_line.prix + "0€"}</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}

export default CartItem;