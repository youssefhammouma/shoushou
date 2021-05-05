import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import Form from "react-bootstrap/cjs/Form";
import {Col, Image, Row} from "react-bootstrap";
import image from '../../Secure_Cart.png'

export default class PaymentForm extends React.Component {

    state = {
        key:
            {
                cvc: ''
                ,
                expiry: ''
                ,
                focus: ''
                ,
                name: ''
                ,
                number: ''
                ,
            },
        validated: false
    };

    handleInputFocus = (e) => {
        this.setState({key: {...this.state.key, focus: e.target.name}})
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({key: {...this.state.key, [name]: value}})
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
    }


    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-6 col-xs-12 d-flex align-items-center"}>
                        <div id="PaymentForm">
                            <Cards
                                cvc={this.state.key.cvc}
                                expiry={this.state.key.expiry}
                                focused={this.state.key.focus}
                                name={this.state.key.name}
                                number={this.state.key.number}
                            />
                        </div>
                    </div>
                    <div className={"col-md-6 col-xs-12"}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formCardName">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="name"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    placeholder="Martin Dupont"
                                />
                            </Form.Group>
                            <Form.Group controlId="formCardNumber">
                                <Form.Label>Numéro de carte</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="number"
                                    maxLength="16"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    placeholder="4583 **** **** ****"
                                />
                            </Form.Group>
                            <Form>
                                <Row className={"mb-5"}>
                                    <Col>
                                        <Form.Control
                                            type="tel"
                                            name="cvc"
                                            maxLength="4"
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                            placeholder="CVC"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="tel"
                                            name="expiry"
                                            maxLength="4"
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                            placeholder="01/01"
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </Form>
                    </div>
                </div>
                <Image src={image} className={"photo"}/>
            </div>
        );
    }
}