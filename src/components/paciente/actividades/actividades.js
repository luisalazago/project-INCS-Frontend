import { Component } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import "./actividades.css";

class ActividadesP extends Component {
    render() {
        return(
            <div className="actividades">
                <Card style={{width: "18rem", height: "25rem", alignItems: "center"}}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <img src="https://www.parents.com/thmb/OKuOQffqezTeWCWOOvlznwIW3Rs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/boy-in-glasses-sucking-on-shirt-0919-6ff5070f-b6a7f4f224ec4ee08d2e9a4b47cf8b1d.jpg"    
                            className="imagen"/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">Actividad</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    }
}

export default ActividadesP;