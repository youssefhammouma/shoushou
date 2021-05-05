import React from 'react';
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {USER} from "../../services/user/userService";

function ProfileBasicInfo() {
    const v = JSON.parse(localStorage.getItem(USER))
    const informations = {
        nom: v.nom,
        prenom: v.prenom,
        email: v.email
    }


    return (
        <div className={"container"}>
            <h2>Informations</h2>
            <Form>
                <Form.Label>Adresse e-mail</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder={informations.email}
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder={informations.nom}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder={informations.prenom}/>
                </Form.Group>
                <Button variant="primary" type="submit" className={"mb-5"}>
                    Modifier
                </Button>
            </Form>
        </div>
    );
}

export default ProfileBasicInfo;