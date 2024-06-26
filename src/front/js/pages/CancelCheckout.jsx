import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTimesCircle } from 'react-icons/fa';
import { useNavigate, Link } from "react-router-dom";
import { Context } from '../store/appContext';


const CancelCheckout = () => {
    const { store, actions } = useContext(Context)
    const { getUserClasses } = actions
    const navigate = useNavigate()
    const { setActiveNavTab } = actions

    return (
        <Container className="my-4 min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <Row className="mt-5">
                <Col className="text-center">
                    <FaTimesCircle style={{ fontSize: '5em', color: 'red' }} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <h2 className="text-center">Pago cancelado</h2>
                    <p className="text-center">Lo sentimos, tu pago no se ha procesado. Por favor, inténtalo de nuevo más tarde.</p>
                    <p className="text-center">Si el problema persiste, no dudes en contactar con nuestro equipo de soporte.</p>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="text-center">
                    <Button onClick={() => setActiveNavTab("home")} as={Link} to="/" variant="primary">Volver a la tienda</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CancelCheckout;