import './juego.css';
import { useEffect, useState } from "react";
import imagen from '../img/juego.jpg'
import { Link } from 'react-router-dom';
import NavBar from '../../admin/navbar/navbar';


export function Juego () {
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

      return (
        <div className='barra'>
          <NavBar/>
          <div className='window'>
          <div className='buton_container'>
            <Link className='buton_acc' to='jugar'>
              <img className='buton_img' src={imagen}></img>
            </Link>
          </div>
        </div>
      </div>
      );
};

export default Juego;