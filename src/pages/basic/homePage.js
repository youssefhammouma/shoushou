import React from 'react';
import Carousels from "../../components/carousel/carousels";
import Articles from "../../components/homePageProducts/articles";
import Presentation from "../../components/presentation/presentation";
import './homepage.css'
import {Badge} from "react-bootstrap";

function HomePage() {
    return (
        <>
            <Carousels/>
            <h2 className={"text-center"}>
                Nos Produits phares <Badge variant="secondary">Nouveaux</Badge>
            </h2>
            <div className="container d-flex justify-content-center">
                <Articles/>
            </div>
            <Presentation/>
        </>
    );
}

export default HomePage;