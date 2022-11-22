import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../navbar/navbar";
import SideNavBar from "../sidebar/sidebar";
import "./infPaciente.css";


export function InformacionPacientes () {
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

  const {id} = useParams();
  const [userP, setUserP] = useState("");
  useEffect(() => {
      const traerInf = async () => {
      const response = await axios.get(url_get_users);
      const data = (response.data.users)
      for(var i = 0; i < data.length; i++){
        if(data[i].id === id){
          setUserP(data[i]);
          break;
        }
      }
    }
    traerInf()
  }, [])

  console.log("Hola", id)
        return (
            <div className="inf_pacientes">
                <NavBar/>
                <SideNavBar pacientes={!todos_usuarios ? "1" : todos_usuarios.users}/>
                <div className="informacion">
                  <p>{userP.name}</p>
                  <p>{userP.lastname}</p>
                  <p>{userP.email}</p>
                </div>
            </div>
        );
};
