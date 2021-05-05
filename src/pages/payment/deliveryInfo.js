import React from 'react';
import DeliveryForm from "../../components/deliveryForm/deliveryForm";
import {Button} from "react-bootstrap";

function DeliveryInfo({history}) {
    return (
        <>
            <DeliveryForm history={history}/>
            <Button variant="primary" className={"monBtn"}>
                Je souhaite m'inscrire
            </Button>
        </>
    );
}

export default DeliveryInfo;