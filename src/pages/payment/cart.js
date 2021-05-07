import React, {useContext, useState} from 'react';
import {CartContext} from "../../contexts/cartContext";
import {Button, Card, Image, ListGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {CART} from "../../services/user/userService";
import {API_URL} from "../../services/apiService";

function Cart() {
    const {total, increase, decrease, removeProduct, cartItems, itemCount, clearCart} = useContext(CartContext);
    const myCart = JSON.parse(localStorage.getItem(CART))

    return (
        <div>
            <div className="text-center mt-5">

                <div className="p-3 text-center text-muted">
                    <h1>Panier</h1>
                    Votre panier est vide
                </div>

                <div className="text-center mt-5">
                    <h1>Panier</h1>
                    <div className={"container"}>
                        {
                            myCart.map((product, idx) => (
                                <div className={"row mb-5"}>
                                    <div className={"col-4"}>
                                        <Image
                                            src={API_URL + product.image.formats.thumbnail.url}
                                            fluid/>
                                    </div>
                                    <div className={"col-8"}>
                                        <ListGroup horizontal className="my-2" key={idx}>
                                            <ListGroup.Item>{product.titre + " " + product.couleurs + " " + product.Taille}</ListGroup.Item>
                                            <ListGroup.Item>{"Prix: " + product.prix + "0€"}</ListGroup.Item>
                                            <ListGroup.Item>{"Quantité: " + product.quantity}</ListGroup.Item>
                                            <ListGroup.Item
                                                variant={"success"}>{"Prix Total: " + Number((product.prix * product.quantity).toFixed(1)) + "0€"}</ListGroup.Item>

                                            <div className={"row"}>
                                                <div className={"col-1 mr-5"}>
                                                    <Button bsPrefix={"cartBtn"} onClick={() => increase(product)}>
                                                        <FontAwesomeIcon className={"ml-3"}
                                                                         icon={["fas", "plus-square"]}
                                                                         size={"2x"}
                                                                         color={"#000"}/>
                                                    </Button>
                                                </div>
                                                <div className={"col-1"}>
                                                    {product.quantity > 1 &&
                                                    <Button bsPrefix={"cartBtn"} onClick={() => decrease(product)}>
                                                        <FontAwesomeIcon className={"ml-3"}
                                                                         icon={["fas", "minus-square"]} size={"2x"}
                                                                         color={"#FF0100"}/>
                                                    </Button>
                                                    }
                                                    {product.quantity === 1 &&
                                                    <Button bsPrefix={"cartBtn"} onClick={() => removeProduct(product)}>
                                                        <FontAwesomeIcon className={"ml-3"}
                                                                         icon={["fas", "trash"]} size={"2x"}
                                                                         color={"#FF0100"}/>
                                                    </Button>
                                                    }
                                                </div>
                                            </div>
                                        </ListGroup>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            cartItems.length > 0 &&
                            <div>
                                <Card style={{width: '18rem'}}>
                                    <Card.Body>
                                        <Card.Title>Nombre d'articles</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{itemCount}</Card.Subtitle>
                                        <Card.Text>
                                            Prix Total: {total}€
                                        </Card.Text>
                                        <Card.Link as={Link} to={"/"}>Continuer mes achats</Card.Link>
                                        <Card.Link as={Link} to={"/delivery"}>Valider le panier</Card.Link>
                                        <Card.Link onClick={clearCart}>Vider</Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;