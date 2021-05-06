import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardArticle from "./card/card";
import {CardDeck} from "react-bootstrap";
import {API_URL} from "../../services/apiService";

function Articles() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        axios.get(API_URL + '/articles/')
            .then((response) => {
                setArticles(response.data)
            })
            .catch((error) => {
                console.log(error);
            })

    }, []);

    return (
        <>
            <CardDeck>
            {articles.map((article) =>
                    <CardArticle article={article}/>
            )}
        </CardDeck>
            </>
    );
}

export default Articles;


/*<Figure>
    <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={article.image}
    />
    <Figure.Caption>
        {article.title}
    </Figure.Caption>
</Figure>*/