import React from 'react';
import DeliveryForm from "../../components/deliveryForm/deliveryForm";

function DeliveryInfo({history}) {
    return (
        <>
            <DeliveryForm history={history}/>
        </>
    );
}

export default DeliveryInfo;