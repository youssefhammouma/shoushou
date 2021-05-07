import React, {useContext} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/cjs/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl"
import NavLink from "./navbar/navLink";
import {Link} from "react-router-dom";
import {Badge, Dropdown, DropdownButton} from "react-bootstrap";
import './header.css'
import {AuthContext} from "../../App";
import {disconnect, isConnected, USER} from "../../services/user/userService";
import {CartContext} from "../../contexts/cartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    const context = useContext(AuthContext)
    const v = JSON.parse(localStorage.getItem(USER))
    let informations = {
        id: ''
    }
    if(isConnected()){
         informations.id = v.id
    }

    const {itemCount} = useContext(CartContext);


    const menu = [
        {nom: "Accueil", url: "/"},
        {nom: "A propos", url: "/about"},
        {nom: "Contact", url: "/contact"}
    ]

    return (
        <>
            <Navbar bg="light">
                <Navbar.Brand as={Link} to={"/"}>Shoushou</Navbar.Brand>
                <Nav className="mr-auto">
                    {menu.map((linkData, index) => <NavLink key={index} nom={linkData.nom} url={linkData.url}/>)}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Rechercher..." className="mr-sm-2"/>
                    <Button variant="outline-info mr-3">Rechercher</Button>
                    <DropdownButton bsPrefix="super-btn" id="dropdown-button-drop-left" drop={"left"}
                                    title={<svg xmlns="http://www.w3.org/2000/svg" className="navbarIcon h-1 w-1"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>}>
                        {context.isConnected ? (
                            <>
                            <Dropdown.Item as={Link} to={"/orders"}>Commandes</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/profile/" + informations.id}>Profil</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={disconnect}>Se deconnecter</Dropdown.Item>
                            </>
                            ): (
                            <>
                            <Dropdown.Item as={Link} to={"/register"}>S'inscrire</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/login"}>Se connecter</Dropdown.Item>
                            </>
                            )}
                    </DropdownButton>
                    <Link to={"/cart"}>
                        <FontAwesomeIcon icon={["fas", "shopping-basket"]} size={"2x"} color={"#000"}/>
                        <Badge variant={"light"}>
                            {itemCount > 0 ? (
                                <Badge variant={"light"}>{itemCount}</Badge>
                            ): (
                                <></>
                            )}
                        </Badge>
                    </Link>
                </Form>
            </Navbar>
        </>
    );
}

export default Header;