import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SignupTrainer from "../component/SignupTrainer.jsx";
import SignupUser from "../component/SignupUser.jsx";

function Signup() {
    const [userType, setUsertype] = useState('user')

    return (
        <>
            <h2>Signup</h2>
            <Tabs
                defaultActiveKey="user"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="user" title="User">
                    {<SignupUser />}
                </Tab>
                <Tab eventKey="trainer" title="Trainer">
                    {<SignupTrainer />}
                </Tab>
            </Tabs>
        </>
    )
}

export default Signup;

