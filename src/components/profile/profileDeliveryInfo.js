import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {TOKEN, USER} from "../../services/user/userService";
import axios from "axios";
import {Bounce, toast} from "react-toastify";
import {API_URL} from "../../services/apiService";

function ProfileDeliveryInfo() {
    const notifyError = () => toast.error("Une erreur est apparue, veuillez réessayer!", {transition: Bounce})
    const notifySucces = () => toast.success("Modification effectuée", {transition: Bounce})
    const v = JSON.parse(localStorage.getItem(USER))
    const informations = {
        id: v.id,
        adresse: v.adresse,
        immeuble: v.immeuble,
        lieuDit: v.lieuDit,
        codePostal: v.codePostal,
        ville: v.ville,
        pays: v.pays,
        telephone: v.telephone,
        sexe: v.sexe
    }

    const [deliveryInfo, setDeliveryInfo] = useState({
        adresse: "",
        immeuble: "",
        lieuDit: "",
        codePostal: "",
        ville: "",
        pays: "",
        telephone: "",
        sexe: false
    });

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setDeliveryInfo({...deliveryInfo, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(API_URL + "/users/" + informations.id, {
                data:{
                    adresse: deliveryInfo.adresse,
                    immeuble: deliveryInfo.immeuble,
                    lieuDit: deliveryInfo.lieuDit,
                    codePostal: deliveryInfo.codePostal,
                    ville: deliveryInfo.ville,
                    pays: deliveryInfo.pays,
                    telephone: deliveryInfo.telephone,
                    sexe: deliveryInfo.sexe,
                }
            },{
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
                }})
            .then(response => {
                if(response.status === 200) {
                    console.log(response)
                    notifySucces()
                }
            })
            .catch(error => {
                // Handle error.
                if(error.response.data.statusCode === 400) notifyError()
                console.log('An error occurred:', error.response);
            })
    };

    return (
        <div className={"container"}>
            <h2>Informations de livraison</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formAdress">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        name={"adresse"}
                        value={deliveryInfo.adresse}
                        placeholder={informations.adresse}
                    />
                </Form.Group>
                <Form.Group controlId="formBuilding">
                    <Form.Label>Immeuble</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        name={"immeuble"}
                        value={deliveryInfo.immeuble}
                        placeholder={informations.immeuble}
                    />
                </Form.Group>
                <Form.Group controlId="formSaySo">
                    <Form.Label>Lieu-dit</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        name={"lieuDit"}
                        value={deliveryInfo.lieuDit}
                        placeholder={informations.lieuDit}
                    />
                </Form.Group>
                <Form.Group controlId="formPostCode">
                    <Form.Label>Code Postal</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        name={"codePostal"}
                        value={deliveryInfo.codePostal}
                        placeholder={informations.codePostal}
                    />
                </Form.Group>
                <Form.Group controlId="formCity">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        name={"ville"}
                        value={deliveryInfo.ville}
                        placeholder={informations.ville}
                    />
                </Form.Group>
                <Form.Group controlId="formCountry">
                    <Form.Label>Pays</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        name={"pays"}
                        value={deliveryInfo.pays}
                        placeholder={informations.pays}
                    />
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={handleChange}
                        name={"telephone"}
                        value={deliveryInfo.telephone}
                        placeholder={informations.telephone}
                    />
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Sexe
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Homme"
                                name="formHorizontalRadios"
                                value={deliveryInfo.sexe}
                                onChange={handleChange}
                                id="radioHomme"
                            />
                            <Form.Check
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
                    Modifier
                </Button>
            </Form>
        </div>
    );
}

export default ProfileDeliveryInfo;