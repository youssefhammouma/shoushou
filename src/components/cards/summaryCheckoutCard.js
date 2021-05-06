import React, {useContext, useState} from 'react';
import {CART} from "../../services/user/userService";
import {CartContext} from "../../contexts/cartContext";
import {ButtonGroup, ToggleButton} from "react-bootstrap";
import {API_URL} from "../../services/apiService";

function SummaryCheckoutCard() {

    const [radioValue, setRadioValue] = useState('1');
    let deliveryPrice = 0

    const radios = [
        {name: 'Chronopost', value: '1'},
        {name: 'Point Relais', value: '2'},
    ];


    if (radioValue === '1') {
        deliveryPrice = 5.0
    }
    // console.log(deliveryPrice)
    const myCart = JSON.parse(localStorage.getItem(CART))
    const {total} = useContext(CartContext);
    return (
        <div className="card border-0 ">
            <div className="card-header card-2">
                <p className="card-text text-muted mt-md-4 mb-2 space">VOTRE COMMANDE</p>
                <hr className="my-2"/>
            </div>
            {
                myCart.map((product, idx) => (
                    <div className="card-body pt-0" key={idx}>
                        <div className="row justify-content-between">
                            <div className="col-auto col-md-7">
                                <div className="media flex-column flex-sm-row"><img className=" img-fluid"
                                                                                    src={API_URL + product.image.formats.thumbnail.url}
                                                                                    width="62" height="62"
                                                                                    alt={product.titre}/>
                                    <div className="media-body my-auto">
                                        <div className="row ">
                                            <div className="col-auto">
                                                <p className="mb-0"><b>{product.titre}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" pl-0 flex-sm-col col-auto my-auto">
                                <p className="boxed-1">{product.quantity}</p>
                            </div>
                            <div className=" pl-0 flex-sm-col col-auto my-auto ">
                                <p><b>{product.prix * product.quantity + '0€'}</b></p>
                            </div>
                        </div>
                        <hr className="my-2"/>
                    </div>
                ))
            }
            <div className="row ">
                <div className="col">
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <p className="mb-1"><b>Sous Total</b></p>
                        </div>
                        <div className="flex-sm-col col-auto">
                            <p className="mb-1"><b>{total + "€"}</b></p>
                        </div>
                    </div>
                    <ButtonGroup toggle>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <div className="row justify-content-between">
                        <div className="col">
                            <p className="mb-1"><b>Livraison</b></p>
                        </div>
                        <div className="flex-sm-col col-auto">
                            <p className="mb-1"><b>{deliveryPrice + "€"}</b></p>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <p><b>Total</b></p>
                        </div>
                        {
                            deliveryPrice > 0 ? (
                                <div className="flex-sm-col col-auto">
                                    <p className="mb-1"><b>{Math.round(total + deliveryPrice) + "€"}</b></p>
                                </div>
                            ) : (
                                <div className="flex-sm-col col-auto">
                                    <p className="mb-1"><b>{total + "€"}</b></p>
                                </div>
                            )
                        }
                        <div className="flex-sm-col col-auto">
                            <p className="mb-1"><b>
                            </b>
                            </p>
                        </div>
                    </div>
                    <hr className="my-0"/>
                </div>
            </div>
        </div>
    );
}

export default SummaryCheckoutCard;