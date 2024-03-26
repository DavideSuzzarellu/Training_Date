import React, { useContext, useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import { Context } from "../store/appContext.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupUser() {
  const { store, actions } = useContext(Context)
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalcode] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')

  let newUser = {}

  const addUser = (e) => {
    e.preventDefault()
    newUser = {
      name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      city: city,
      postal_code: parseInt(postalCode),
      phone_number: phone,
      gender: gender === '' ? 'Male' : gender
    }
    actions.addUser(newUser);
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('city').value = '';
    document.getElementById('postal-code').value = '';
    document.getElementById('password').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('gender').value = 'Male';
    console.log(newUser)

  }

  return (
    <Form style={{ 'paddingLeft': '10%', 'paddingRight': '10%' }} onSubmit={addUser}>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" id='first-name' onChange={(e) => setFirstname(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" id='last-name' onChange={(e) => setLastname(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id='email' onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter city" id='city' onChange={(e) => setCity(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="postalCode">
        <Form.Label>Postal code</Form.Label>
        <Form.Control type="number" placeholder="Enter postal code" id='postal-code' onChange={(e) => setPostalcode(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id='password' onChange={(e) => setPassword(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phoneNumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="Enter phone number" id='phone' onChange={(e) => setPhone(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select id='gender' onChange={(e) => setGender(e.target.value)} defaultValue='Male' required>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Not Specified'>Not Specified</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
  );
}

export default SignupUser;