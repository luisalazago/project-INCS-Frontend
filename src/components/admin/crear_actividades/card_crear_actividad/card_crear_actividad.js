import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "./card_crear_actividad.css";

export function CardCrearActividades() {
    const [error, setError] = useState();
    const fs = require("fs");
    const file_user = fs.readFileSync("src\logged_user.txt", "utf-8");
    const arr = file_user;
    console.log(arr);
    const [actividad, setActividad] = useState({
        description: ""
    });
    const [card_actividad, setCardActividad] = useState({
        images: []
    });

    const navigate = useNavigate();
    const url_get = "https://us-central1-atencion-conjunta-365122.cloudfunctions.net/create_activity";

    const handleChange = ({target: {name, value}}) => {
        setActividad({...actividad, [name]: value});
        console.log(actividad);
    };

    const fileSelectedHandler = (e) => {
        setCardActividad({images: [...card_actividad.images, ...e.target.files]})
        console.log(card_actividad);
    };

    const handleInicio = (e) => {
        navigate("/home");
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");
        try {
            {/*const response = await axios.post(url_get, actividad);
        const data = (response.data.new_activity);*/}

            window.location.reload(false);
        }
        catch(error) {
            setError(error.message);
        }
    };

    return(
        <div className="card_crear_actividades">
            <div className="row fila">
                <div className="col-8">
                    <h1>Creación de Actividades</h1>
                </div>
                <div className="col-3">
                    <div className="centrar_button2">
                        <Button className="inicio_button" onClick={handleInicio}>Volver al Inicio</Button>
                    </div>
                </div>
            </div>
            <div className="centrar_card">
                <form onSubmit={submitHandler}>
                    <Card className="card_actividad">
                        <Card.Body>
                            <Card.Title>Digite la descripción de la actividad:</Card.Title>
                            <Form className="input_card">
                                <Form.Control type="text" name="description" placeholder="Descripción de la Actividad" onChange={handleChange}/>
                            </Form>
                            <Card.Title className="card_titulo">Cargue las imágenes correspondientes a la actividad:</Card.Title>
                            <Form className="input_card">
                                <Form.Control type="file" name="images" multiple onChange={fileSelectedHandler}/>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="centrar_button">
                        <Button className="card_button" onClick={submitHandler}>Crear Actividad</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}