import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NavBar from "../navbar/navbar";
import SideNavBar from "../sidebar/sidebar";
import { CardCrearActividades } from "./card_crear_actividad/card_crear_actividad";
import "./crear_actividades.css";

export function CrearActiviades() {
    const [todos_usuarios, setTodosUsuarios] = useState();

    const url_get_users = "https://us-central1-atencion-conjunta-365122.cloudfunctions.net/get_all_users";

    const getAllUsers = async () => {
        const response = await fetch(url_get_users);
        console.log("Estado Usuarios: " + response.status);
        const responseJSON = await response.json();
        setTodosUsuarios(responseJSON);
        console.log(responseJSON);
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return(
        <div className="actividades">
            <NavBar/>
            <SideNavBar pacientes={!todos_usuarios ? "1" : todos_usuarios.users}/>
            <CardCrearActividades/>
        </div>
    );
}