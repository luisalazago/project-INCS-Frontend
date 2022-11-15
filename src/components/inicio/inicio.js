import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-router-dom";
import "./inicio.css";

class Inicio extends Component {
    render() {
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
                                <Button variant="primary" className="bc1">Crear Actividades</Button>
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
}

export default Inicio;