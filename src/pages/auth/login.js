import React, {useContext,useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import {Bounce, toast} from "react-toastify";
import {AuthContext} from "../../App";
import {TOKEN, USER} from "../../services/user/userService";

function Login(props) {
    const notifyError = () => toast.error("Le compte est introuvable !", {transition: Bounce})
    const notifySucces = (nom, prenom) => toast.success("Bienvenue " + prenom + " " + nom, {transition: Bounce})
    const context = useContext(AuthContext);
    const [credentials, setCredentials] = useState({email: "", password: ""});

    const [validated, setValidated] = useState(false);
    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setCredentials({...credentials, [name]: value})
    }

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else {
            const url = "http://localhost:1337/"
            await axios
                .post(url + "auth/local", {
                    identifier: credentials.email,
                    password: credentials.password,
                })
                .then(response => {
                    // Handle success.
                    if(response.status === 200) {
                        console.log("REPONSE", response)
                        context.setConnected(true)
                        localStorage.setItem(TOKEN, response.data.jwt)
                        localStorage.setItem(USER, JSON.stringify(response.data.user))
                        const v = JSON.parse(localStorage.getItem(USER))
                        notifySucces(v.prenom, v.nom)
                        props.history.push("/")
                    }else console.log("ERREUR")
                })
                .catch(error => {
                    // Handle error.
                    if(error.response.data.statusCode === 400) notifyError()
                    console.log('An error occurred:', error.response);
                })
        }

        setValidated(true)
    };

    return (
        <div className={"container"}>
            <h1 className={"text-center"}>Connexion</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Adresse email</Form.Label>
                    <Form.Control
                        required
                        name={"email"}
                        value={credentials.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Entrez votre email"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        required
                        name={"password"}
                        value={credentials.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="Mot de passe"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className={"mb-2"}>
                    Se connecter
                </Button>
                <p className={"mb-5"}>Pas de compte ? <Link to={"/register"}>Je m'inscris </Link></p>
            </Form>
        </div>
    );
}

export default Login;