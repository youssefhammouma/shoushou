import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {API_URL} from "../../../services/apiService";

function CardArticle({article}) {
    return (
            <Card style={{maxWidth: "18rem"}} as={Link} to={"/articles/" + article.id}>
                <Card.Img variant="top" src={API_URL + article.image.url}/>
                <Card.Body>
                    <Card.Title>{article.titre}</Card.Title>
                    <Card.Text>
                        {article.prix} €
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">L'offre expire dans 5 jours</small>
                </Card.Footer>
            </Card>
    );
}

export default CardArticle;