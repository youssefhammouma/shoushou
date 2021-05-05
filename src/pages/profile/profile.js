import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import ProfileBasicInfo from "../../components/profile/profileBasicInfo";
import ProfileDeliveryInfo from "../../components/profile/profileDeliveryInfo";

function Profile() {
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Informations Basiques">
                <ProfileBasicInfo/>
            </Tab>
            <Tab eventKey="profile" title="Informations de livraison">
                <ProfileDeliveryInfo/>
            </Tab>
        </Tabs>
    );
}

export default Profile;