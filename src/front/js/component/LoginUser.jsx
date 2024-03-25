import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginUser() {
    return (
        <Form style={{ 'paddingLeft': '10%', 'paddingRight': '10%' }}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Log in
            </Button>
        </Form>
    );
}

export default LoginUser;