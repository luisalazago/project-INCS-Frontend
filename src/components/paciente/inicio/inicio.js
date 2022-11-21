import { Component } from "react";
import ActividadesP from "../actividades/actividades";
import "./inicio.css";

class InicioP extends Component {
    render() {
        return(
            <div className="inicio">
                <h1>Actividades Actuales</h1>
                <div className="actividades">
                    <ActividadesP className="actividad"/>
                </div>
            </div>
        );
    }
}

export default InicioP;