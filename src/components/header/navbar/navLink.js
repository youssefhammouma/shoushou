import React from 'react';
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

function NavLink(props) {
    return (
            <Nav.Link as={Link} to={props.url}>{props.nom}</Nav.Link>
    );
}

export default NavLink;