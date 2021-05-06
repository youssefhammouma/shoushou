import React, {useState} from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import {Bounce, toast} from "react-toastify";
import cryptoRandomString from "crypto-random-string";
import {API_URL} from "../../services/apiService";

function Register(props) {
    const notifyError = () => toast.error("Cette adresse e-mail est déjà utilisée!", {transition: Bounce})
    const notifySucces = () => toast.success("Vous êtes inscrit! Connectez Vous", {transition: Bounce})
    const [validated, setValidated] = useState(false);

    const rand = cryptoRandomString({length: 10, type: 'alphanumeric'})

    const [credentials, setCredentials] = useState({email: "", password: "", lastName: "", firstName: ""});

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setCredentials({...credentials, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else {
            setValidated(true);

            axios
                .post(API_URL +"/auth/local/register", {
                    username: Date.now() + rand,
                    email: credentials.email,
                    password: credentials.password,
                    nom: credentials.lastName,
                    prenom: credentials.firstName
                })
                .then(response => {
                    // Handle success.
                    if(response.status === 200) {
                        notifySucces()
                        props.history.push("/login")
                    }

                })
                .catch(error => {
                    // Handle error.
                    if(error.response.data.statusCode === 400) notifyError()
                    console.log('An error occurred:', error.response);
                })
        }

    };

    return (
        <div className={"container"}>
            <h1 className={"text-center"}>Inscription</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Adresse e-mail *</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="exemple@email.fr"
                            name={"email"}
                            onChange={handleChange}
                            value={credentials.email}
                        />
                        <Form.Control.Feedback>Super!</Form.Control.Feedback>
                        <Form.Control.Feedback type={"invalid"}>Veuillez entrer une adresse e-mail valide !</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Nom *</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nom"
                            name={"lastName"}
                            onChange={handleChange}
                            value={credentials.lastName}
                        />
                        <Form.Control.Feedback>Super!</Form.Control.Feedback>
                        <Form.Control.Feedback type={"invalid"}>Veuillez entrer un nom valide !</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Prénom *</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Prénom"
                            name={"firstName"}
                            onChange={handleChange}
                            value={credentials.firstName}
                        />
                        <Form.Control.Feedback>Super!</Form.Control.Feedback>
                        <Form.Control.Feedback type={"invalid"}>Veuillez entrer un prénom valide !</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                        <Form.Label>Mot de passe *</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Mot de passe"
                            name={"password"}
                            onChange={handleChange}
                            value={credentials.password}
                        />
                        <Form.Control.Feedback>Super!</Form.Control.Feedback>
                        <Form.Control.Feedback type={"invalid"}>Veuillez entrer un mot de passe valide !</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">S'inscrire</Button>
                    <p className={"mb-5"}>Déjà un compte ? <Link to={"/login"}>Se connecter </Link></p>
                </Form>
        </div>
    );
}

export default Register;