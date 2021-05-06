import React, {useContext, useState} from 'react';
import PaymentForm from "../../components/paymentForm/paymentForm";
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import SummaryCheckoutCard from "../../components/cards/summaryCheckoutCard";
import axios from "axios";
import {CART, TOKEN, USER} from "../../services/user/userService";
import cryptoRandomString from "crypto-random-string";
import {API_URL} from "../../services/apiService";
import {CartContext} from "../../contexts/cartContext";
import {Bounce, toast} from "react-toastify";

function Payment(props) {
    const v = JSON.parse(localStorage.getItem(CART))
    const x = JSON.parse(localStorage.getItem(USER))
    const randomReference = cryptoRandomString({length: 4, type: 'numeric'})
    const {clearCart} = useContext(CartContext);
    const [show, setShow] = useState(false);
    const notify = () => toast.success("Merci beaucoup pour votre achat " + x.prenom + " ❤️", {transition: Bounce})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlePayment = (event) => {
        event.preventDefault();
        const data = {
            reference: "Sh" + randomReference,
            user: x,
        }

        console.log(data)

        axios.post(API_URL + "/orders", data,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
                }
            })
            .then(response => {
                //handle succes
                if (response.status === 200) {
                    console.log(response)
                    v.map(article => {
                        axios.post(API_URL + "/order-lines/",
                            {
                                order: response.data.id,
                                article: article,
                                prix: article.prix * article.quantity,
                                qte: article.quantity,
                                titreArticle: article.titre
                            }
                        ).then(r => {
                            console.log(r)
                            if(r.status === 200) {
                                clearCart()
                                notify()
                                props.history.push("/")
                            }
                        })
                            .catch(err => {
                                console.log(err)
                            })
                    })
                }
            })
            .catch(error => {
                if (error.status === 400) {
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