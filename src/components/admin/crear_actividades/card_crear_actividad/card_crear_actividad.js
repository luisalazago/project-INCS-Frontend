import Card from 'react-bootstrap/Card';
import "./card_crear_actividad.css";

export function CardCrearActividades() {
    return(
        <div className="card_crear_actividades">
            <h1>Creación de Actividades</h1>
            <div className="centrar_card">
                <Card className="card_actividad">
                    <Card.Body>
                        <Card.Title>Digite el nombre de la actividad:</Card.Title>
                        
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}