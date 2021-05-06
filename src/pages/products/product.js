import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Image} from "react-bootstrap";
import axios from "axios";
import { CartContext } from '../../contexts/cartContext';
import {API_URL} from "../../services/apiService";

function Product({match, location}) {

    const {addProduct, cartItems, increase} = useContext(CartContext);

    const isInCart = articles => {
        return !!cartItems.find(item => item.id === articles.id);
    }

    const [article, setArticle] = useState({
        "id": 0,
        "titre": "Nom de produit",
        "prix": "000€",
        "couleurs": [
            "couleur",
            "couleur",
            "couleur"
        ],
        "Taille": "taille",
        "stock": 0,
        "description": "description",
        "image": "image",
        "categoriesId": 0
    });
    useEffect(() => {
        if (location.state && location.state.article) {
            setArticle(location.state.article)
        } else {
            console.log("Match", match)
            axios.get(API_URL + '/articles/' + match.params.id)
                .then((response) => setArticle(response.data))
        }
    }, []);

        return (
            <>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-6 col-xs-12 d-flex align-items-center"}>
                            <Image
                                width={300}
                                height={300}
                                src={API_URL + article.image.url} rounded/>
                        </div>
                        <div className={"col-md-6 col-xs-12"}>
                            <h2>{article.titre}</h2>
                            <h4>{article.prix}</h4>
                            <Form>
                                <Form.Group controlId="form.Color">
                                    <Form.Label>Couleur</Form.Label>
                                    <Form.Control as="select">
                                        <option>{article.couleurs}</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="form.Size">
                                    <Form.Label>Taille</Form.Label>
                                    <Form.Control as="select">
                                        <option>{article.Taille}</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="form.Quantity">
                                    <Form.Label>Quantité</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </Form.Control>
                                </Form.Group>
                                {
                                    isInCart(article) &&
                                    <Button
                                        onClick={() => increase(article)}
                                        variant="primary">
                                        Ajouter plus
                                    </Button>
                                }
                                {
                                    !isInCart(article) &&
                                    <Button
                                        onClick={() => addProduct(article)}
                                        variant="primary">
                                        AJOUTER AU PANIER
                                    </Button>
                                }
                                <p><strong>Description du produit</strong></p>
                                <p>{article.description}</p>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default Product;