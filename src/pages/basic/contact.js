import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Bounce, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Contact(props) {
    const notify = () => toast.success("Votre message à bien été envoyé. " +
        "Vous recevrez une réponse très prochainement", {transition: Bounce})


    const [validated, setValidated] = useState(false);

    const [contactInformations, setContactInformations] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        message: ""
    });

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setContactInformations({...contactInformations, [name]: value})
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else {
            props.history.push("/")
            notify()
        }

        setValidated(true)
    }
    return (

        <div className={"container"}>
            <h1 className={"text-center"}>Contactez-Nous</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="form.LastName">
                    <Form.Label>Nom*</Form.Label>
                    <Form.Control
                        required
                        name={"nom"}
                        value={contactInformations.nom}
                        onChange={handleChange}
                        type="text"
                        placeholder="Nom"
                    />
                    <Form.Control.Feedback>Super !</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez renseigner un nom
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="form.FirstName">
                    <Form.Label>Prénom*</Form.Label>
                    <Form.Control
                        required
                        name={"prenom"}
                        value={contactInformations.prenom}
                        onChange={handleChange}
                        type="text"
                        placeholder="Prénom"
                    />
                    <Form.Control.Feedback>Super !</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez renseigner un prénom
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="form.EmailAddress">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                        required
                        name={"email"}
                        value={contactInformations.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="name@example.com"
                    />
                    <Form.Control.Feedback>Super !</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez renseigner une adresse email
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="form.PhoneNumber">
                    <Form.Label>Téléphone*</Form.Label>
                    <Form.Control
                        required
                        name={"telephone"}
                        value={contactInformations.telephone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="0601020304"
                    />
                    <Form.Control.Feedback>Super !</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Veuillez renseigner un numéro de téléphone
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        required
                        name={"message"}
                        value={contactInformations.message}
                        onChange={handleChange}
                        as="textarea"
                        rows={3}
                    />
                    <Form.Control.Feedback>Super !</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                       Veuillez renseigner un message
                    </Form.Control.Feedback>
                </Form.Group>
                <p>Champs obligatoires * :</p>
                <div className="text-center">
                    <Button variant="primary" type="submit" className={"mb-5"}>
                        Envoyer
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Contact;