import userEvent from "@testing-library/user-event";
import { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Route, Routes, useNavigate} from "react-router-dom";
import "./inicio.css";

export function Inicio() {
    const navigate = useNavigate();
    const handlerActividad = (e) => {
        navigate("/crear_actividades");
    }
    return(
            <div className="inicio">
                <h1>¿Qué desea hacer?</h1>
                <div className="pc">
                    <Card className="c1">
                        <Card.Body>
                            <Card.Title className="tc1">Creación de Actividades</Card.Title>
                            <Card.Text>
                                En esta sección puede navegar hasta el módulo de creación de 
                                actividades para llenar la información solicitada y crear la 
                                actividad correspondiente para cada niño. Para ir al módulo
                                descrito oprima el botón de abajo.
                            </Card.Text>
                            <div className="centrarbc1">
                                <Form onSubmit={handlerActividad}>
                                    <Button type="submit" variant="primary" className="bc1">Crear Actividades</Button>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="pc">
                    <Card className="c2">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <div className="centrarc3">
                                        <Card className="c3">
                                            <Card.Body>
                                                <Card.Text>
                                                    ¿Qué tipo de actividad desea ver?
                                                </Card.Text>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected value="0">Todas</option>
                                                    <option value="1">Fácil</option>
                                                    <option value="2">Intermedio</option>
                                                    <option value="3">Difícil</option>
                                                </select>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="centrarbc2">
                                        <Button variant="primary" className="bc2">Ver Actividades</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        );
    }