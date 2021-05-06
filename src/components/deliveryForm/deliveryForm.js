import React, {useState} from 'react';
import {isConnected, TOKEN, USER} from "../../services/user/userService";
import axios from "axios";
import {Button, Col, Form, Row} from "react-bootstrap";
import cryptoRandomString from "crypto-random-string";
import {API_URL} from "../../services/apiService";

function DeliveryForm(props) {
    const v = JSON.parse(localStorage.getItem(USER))
    const isLogged = isConnected()
    const rand = cryptoRandomString({length: 10, type: 'alphanumeric'})

    const [validated, setValidated] = useState(false);

    const informations = {
        id: isLogged ? v.id : '',
        nom: isLogged ? v.nom : '',
        prenom: isLogged ? v.prenom : '',
        email: isLogged ? v.email : '',
        adresse: isLogged ? v.adresse : '',
        immeuble: isLogged ? v.immeuble : '',
        lieuDit: isLogged ? v.lieuDit : '',
        codePostal: isLogged ? v.codePostal : '',
        ville: isLogged ? v.ville : '',
        pays: isLogged ? v.pays : '',
        telephone: isLogged ? v.telephone : '',
        sexe: isLogged ? v.sexe : false
    }

    const [deliveryInfo, setDeliveryInfo] = useState(informations);

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setDeliveryInfo({...deliveryInfo, [name]: value})
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else {
            if (isConnected()) {
                axios
                    .put(API_URL + "/users/" + informations.id, {
                        data: {
                            adresse: deliveryInfo.adresse,
                            immeuble: deliveryInfo.immeuble,
                            lieuDit: deliveryInfo.lieuDit,
                            codePostal: deliveryInfo.codePostal,
                            ville: deliveryInfo.ville,
                            pays: deliveryInfo.pays,
                            telephone: deliveryInfo.telephone,
                            sexe: deliveryInfo.sexe,
                        }
                    }, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
                        }
                    })
                    .then(response => {
                        if (response.status === 200) {
                            console.log(response)
                            console.log("JE SUIS ICI")
                            props.history.push("/payment")
                        }
                    })
                    .catch(error => {
                        // Handle error.
                        if (error.statusCode === 400) console.log('An error occurred:', error.response);
                    })
            } else {
                axios
                    .post(API_URL + '/unregistered-users', {
                        username: Date.now() + rand,
                        email: deliveryInfo.email,
                        nom: deliveryInfo.nom,
                        prenom: deliveryInfo.prenom,
                        adresse: deliveryInfo.adresse,
                        immeuble: deliveryInfo.immeuble,
                        lieuDit: deliveryInfo.lieuDit,
                        codePostal: deliveryInfo.codePostal,
                        ville: deliveryInfo.ville,
                        pays: deliveryInfo.pays,
                        telephone: deliveryInfo.telephone,
                        sexe: deliveryInfo.sexe,
                    })
                    .then(response => {
                        if (response.status === 200) {
                            console.log("REPONSE ICI", response)
                            props.history.push("/payment")
                        }
                    })
                    .catch(err => {
                        console.log("ERREUR ICI", err)
                    })
            }
        }

        setValidated(true)
    };

    return (
        <div className={"container"}>
            <h2 className={"text-center"}>VOS COORDONNÉES - ADRESSE DE LIVRAISON</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formMail">
                    <Form.Label>Adresse E-mail *</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        onChange={handleChange}
                        name={"email"}
                        value={deliveryInfo.email}
                        placeholder="Adresse e-mail"
                    />
                    <Form.Control.Feedback>Super!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez entrer une adresse e-mail.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formLastName">
                    <Form.Label>Nom *</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onChange={handleChange}
                        name={"nom"}
                        value={deliveryInfo.nom}
                        placeholder="Nom"
                    />
                    <Form.Control.Feedback>Super!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez entrer un nom.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formAdress">
                    <Form.Label>Prénom *</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onChange={handleChange}
                        name={"prenom"}
                        value={deliveryInfo.prenom}
                        placeholder="Prénom"
                    />
                    <Form.Control.Feedback>Super!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez entrer un prénom.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formAdress">
                    <Form.Label>Adresse *</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onChange={handleChange}
                        name={"adresse"}
                        value={deliveryInfo.adresse}
                        placeholder="Adresse"
                    />
                    <Form.Control.Feedback>Super!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez entrer une adresse.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBuilding">
                    <Form.Label>Immeuble</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        name={"immeuble"}
                        value={deliveryInfo.immeuble}
                        placeholder="Immeuble"
                    />
                    <Form.Control.Feedback>Super!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formSaySo">
                    <Form.Label>Lieu-dit</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        name={"lieuDit"}
                        value={deliveryInfo.lieuDit}
                        placeholder="Lieu Dit"
                    />
                    <Form.Control.Feedback>Super!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formPostCode">
                    <Form.Label>Code Postal *</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        onChange={handleChange}
                        name={"codePostal"}
                        value={deliveryInfo.codePostal}
                        placeholder="Code Postal"
                    />
                    <Form.Control.Feedback>Super!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez entrer un code postal.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formCity">
                    <Form.Label>Ville *</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onChange={handleChange}
                        name={"ville"}
                        value={deliveryInfo.ville}
                        placeholder="Ville"
                    />
                    <Form.Control.Feedback>Super!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez entrer une ville.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formCountry">
                    <Form.Label>Pays *</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onChange={handleChange}
                        name={"pays"}
                        value={deliveryInfo.pays}
                        placeholder="Pays"
                    />
                    <Form.Control.Feedback>Super!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez entrer un pays.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Téléphone *</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        onChange={handleChange}
                        name={"telephone"}
                        value={deliveryInfo.telephone}
                        placeholder="Numéro de téléphone"
                    />
                    <Form.Control.Feedback>Super!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez entrer un numéro de téléphone.
                    </Form.Control.Feedback>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Civilité *
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                required
                                type="radio"
                                label="Homme"
                                name="formHorizontalRadios"
                                value={deliveryInfo.sexe}
                                onChange={handleChange}
                                id="radioHomme"
                            />
                            <Form.Check
                                required
                                type="radio"
                                label="Femme"
                                name="formHorizontalRadios"
                                value={deliveryInfo.sexe}
                                onChange={handleChange}
                                id="radioFemme"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Button variant="primary" type="submit" className={"mb-5"}>
                    Continuer
                </Button>
            </Form>
        </div>
    );
}

export default DeliveryForm;