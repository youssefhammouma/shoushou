import React, {useState} from 'react';
import PaymentForm from "../../components/paymentForm/paymentForm";
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import SummaryCheckoutCard from "../../components/cards/summaryCheckoutCard";
import axios from "axios";
import {CART, USER} from "../../services/user/userService";
import cryptoRandomString from "crypto-random-string";

function Payment() {
    const v = JSON.parse(localStorage.getItem(CART))
    const randomReference = cryptoRandomString({length: 10, type: 'numeric'})
    console.log(v)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlePayment = (event) => {
        event.preventDefault();
        const url = "http://localhost:1337/"
        axios.post(url + "orders", {
            order_lines: v.map((article) => {
                return {
                    titre: article.titre,
                    prix: article.prix,
                    couleurs: article.couleurs,
                    taille: article.taille,
                    stock: article.stock,
                    description: article.description,
                    image: article.image.url,
                    category: article.category.id
                }
            }),
            reference: randomReference
        })
            .then(response => {
                //handle succes
                if(response.status === 200) {
                    console.log(response)
                }
            })
            .catch(error => {
                if(error.status === 400) {
                    console.log(error)
                }
            })
    }
    return (
        <div className={"mx-3 mt-5"}>
            <div className={"row"}>
                <div className={"col-6"}>
                    <SummaryCheckoutCard/>
                </div>
                <div className={"col-6"}>
                    <PaymentForm/>

                    <div className={"container mb-5"}>
                        <Button className={"mr-3"} variant="danger" onClick={handleShow}>Annuler</Button>
                        <Button variant="success" onClick={handlePayment}>Valider et payer</Button>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Attention</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Êtes-vous sur(e) de vouloir annuler ?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Non
                            </Button>
                            <Button variant="primary" as={Link} to={"/"}>
                                Oui
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Payment;