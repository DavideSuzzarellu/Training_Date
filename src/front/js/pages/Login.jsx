import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LoginUser from "../component/LoginUser.jsx";
import LoginTrainer from "../component/LoginTrainer.jsx";

function Login() {

    return (
        <>
            <h2>Login</h2>
            <Tabs
                defaultActiveKey="user"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="user" title="User">
                    {<LoginUser />}
                </Tab>
                <Tab eventKey="trainer" title="Trainer">
                    {<LoginTrainer />}
                </Tab>
            </Tabs>
        </>
    )
}

export default Login;

