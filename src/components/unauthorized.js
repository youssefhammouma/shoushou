import React from 'react';
import { Link } from 'react-router-dom';
import './unauthorized.css'

const Unauthorized = () => {
    return (
        <div className='container'>
            <div className="gandalf">
                <div className="fireball"/>
                <div className="skirt"/>
                <div className="sleeves"/>
                <div className="shoulders">
                    <div className="hand left"/>
                    <div className="hand right"/>
                </div>
                <div className="head">
                    <div className="hair"/>
                    <div className="beard"/>
                </div>
            </div>
            <div className="message">
                <h1>403 - Vous ne passerez pas !</h1>
                <p>Uh oh, Gandalf vous bloque le passage!<br />Peut-être avez-vous une faute de frappe dans l'URL? Ou vous vouliez vous rendre dans un endroit différent? Comme...le Mordor?</p>
            </div>
            <p><Link to='/'>Accueil</Link></p>
        </div>
    )
}
export default Unauthorized