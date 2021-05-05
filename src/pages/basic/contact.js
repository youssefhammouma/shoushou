import React from 'react';
import {Button, Form} from "react-bootstrap";
import {Bounce,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Contact(props) {

    const handleSubmit = () => {
        const notify = () => toast.success("Votre message à bien été envoyé. " +
            "Vous recevrez une réponse très prochainement", {transition: Bounce})
        props.history.push("/")
        notify()
    }
    return (

        <div className={"container"}>
            <h1 className={"text-center"}>Contactez-Nous</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="form.LastName">
                    <Form.Label>Nom*</Form.Label>
                    <Form.Control type="text" placeholder="Nom"/>
                </Form.Group>
                <Form.Group controlId="form.FirstName">
                    <Form.Label>Prénom*</Form.Label>
                    <Form.Control type="text" placeholder="Prénom"/>
                </Form.Group>
                <Form.Group controlId="form.EmailAddress">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group controlId="form.PhoneNumber">
                    <Form.Label>Téléphone*</Form.Label>
                    <Form.Control type="number" placeholder="0601020304"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
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