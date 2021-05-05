import React from 'react';
import Media from "react-bootstrap/cjs/Media";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Presentation() {
    return (
        <>
            <div className={"container mb-5"}>
        <h2 className={"text-center mt-5"}>Le brossage de dents, la corvée est finie !</h2>
            <Media>
                <img
                    width={250}
                    height={250}
                    className="align-self-center mr-3"
                    src="https://www.petite-entreprise.net/images-donnees/fiches/articles/images/champ___8/locaux%20professionnels@w_750.jpg"
                    alt="Entreprise"
                />
                <Media.Body>
                    <p>
                        Avec votre future brosse à dents Shoushou cela devient un réel jeu d'enfant
                        Pour qui d'ailleurs ça ne l'était pas du tout, souvenez-vous des crises de colère chaque soir au moment se laver les dents.

                        Les concepteurs de la Shoushou se sont dit un jour qu'il fallait repenser cette vielle brosse à dents pas aussi efficace qu'il n'y paraît !
                    </p>
                    <div className={"text-center"}>
                        <Button as={Link} to={"/about"} variant={"info"}>
                            Découvrir
                        </Button>
                    </div>
                </Media.Body>
            </Media>
            </div>
        </>
    );
}

export default Presentation;