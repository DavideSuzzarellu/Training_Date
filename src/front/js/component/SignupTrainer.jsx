import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupTrainer() {
    return (
        <Form style={{ 'paddingLeft': '10%', 'paddingRight': '10%' }}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="postalCode">
                <Form.Label>Postal code</Form.Label>
                <Form.Control type="number" placeholder="Enter postal code" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="iban">
                <Form.Label>IBAN</Form.Label>
                <Form.Control type="number" placeholder="Enter IBAN" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="number" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="website">
                <Form.Label>Website URL</Form.Label>
                <Form.Control type="url" placeholder="Enter website url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="instagram">
                <Form.Label>Instagram URL</Form.Label>
                <Form.Control type="url" placeholder="Enter Instagram url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="facebook">
                <Form.Label>Facebook URL</Form.Label>
                <Form.Control type="url" placeholder="Enter facebook url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="twitter">
                <Form.Label>Twitter URL</Form.Label>
                <Form.Control type="url" placeholder="Enter twitter url" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign up
            </Button>
        </Form>
    );
}

export default SignupTrainer;