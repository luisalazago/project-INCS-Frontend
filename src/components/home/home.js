import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import CrearActiviades from "../admin/crear_actividades/crear_actividades";
import { Inicio } from "../admin/inicio/inicio";
import NavBar from "../admin/navbar/navbar";
import SideNavBar from "../admin/sidebar/sidebar";
import InicioP from "../paciente/inicio/inicio";
import NavBarP from "../paciente/navbar/navbar";
import "./home.css";

export function Home() {
    const {logout, loading} = useAuth();
    const handleLogout = async () => {
        await logout();
    }
    
    const temp = "admin";
    const [todos, setTodos] = useState();
    const [todos_usuarios, setTodosUsuarios] = useState();

    const url_get = "https://us-central1-atencion-conjunta-365122.cloudfunctions.net/get_user_by_email?email=Nico123@gmail.com";
    const url_get_users = "https://us-central1-atencion-conjunta-365122.cloudfunctions.net/get_all_users";

    const getAllUsers = async () => {
        const response = await fetch(url_get_users);
        console.log("Estado Usuarios: " + response.status);
        const responseJSON = await response.json();
        setTodosUsuarios(responseJSON);
        console.log(responseJSON);
    };
    const getUser = async () => {
        const response = await fetch(url_get);
        console.log(response.status);
        const responseJSON = await response.json();
        setTodos(responseJSON);
    };
    useEffect(() => {
        getUser();
        getAllUsers();
    }, []);

    if (temp === "admin") {
        if (loading) return(<h1>loading</h1>);
        return(
            <div className="home">
                <NavBar usuario={!todos ? "" : todos.user.name} logOut={handleLogout}/>
                <SideNavBar pacientes={!todos_usuarios ? "1" : todos_usuarios.users}/>
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/crear_actividades" element={<CrearActiviades/>}/>
                </Routes>
            </div>
        );
    }
    else {
        return(
            <div className="home">
                <NavBarP usuario={!todos ? "" : todos.user.name} logOut={handleLogout}/>
                <Routes>
                    <Route path="/" element={<InicioP/>}/>
                </Routes>
            </div>
        );
    }
}