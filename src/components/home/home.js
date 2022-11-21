import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Inicio } from "../admin/inicio/inicio";
import NavBar from "../admin/navbar/navbar";
import SideNavBar from "../admin/sidebar/sidebar";
import "./home.css";

export function Home() {
    const {id} = useParams();
    console.log(id);
    
    const [todos, setTodos] = useState();
    const [todos_usuarios, setTodosUsuarios] = useState();

    var temp = id;
    const temp2 = temp.slice(1, -1) + temp[temp.length - 1];
    const url_get = "https://us-central1-atencion-conjunta-365122.cloudfunctions.net/get_user_by_email?email=" + temp2;
    const url_get_users = "https://us-central1-atencion-conjunta-365122.cloudfunctions.net/get_all_users";
    console.log(url_get);

    const getAllUsers = async () => {
        const response = await fetch(url_get_users);
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
    return(
        <div className="home">
            <NavBar usuario={!todos ? "" : todos.user.name}/>
            <SideNavBar pacientes={!todos_usuarios ? "1" : todos_usuarios.users}/>
            <Routes>
                <Route path="/" element={<Inicio usuario={temp2}/>}/>
            </Routes>
        </div>
    );
}