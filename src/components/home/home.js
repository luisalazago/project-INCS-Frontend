import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "../admin/inicio/inicio";
import { NavBar } from "../admin/navbar/navbar";
import SideNavBar from "../admin/sidebar/sidebar";
import "./home.css";

export function Home() {
    
    const [todos_usuarios, setTodosUsuarios] = useState();

    const url_get_users = "https://us-central1-atencion-conjunta-365122.cloudfunctions.net/get_all_users";

    const getAllUsers = async () => {
        const response = await fetch(url_get_users);
        const responseJSON = await response.json();
        setTodosUsuarios(responseJSON);
        console.log(responseJSON);
    };

    useEffect(() => {
        getAllUsers();
    }, []);
    return(
        <div className="home">
            <NavBar/>
            <SideNavBar pacientes={!todos_usuarios ? "1" : todos_usuarios.users}/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
            </Routes>
        </div>
    );
}