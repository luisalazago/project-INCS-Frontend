import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "../alert/alert";
import axios from "axios";

export function Register() {
    
    const [user, setUser] = useState({
        rol:"",
        nombre:"",
        apellido:"",
        email:"",
        password:""
    });

    const navigate = useNavigate();
    const [error, setError] = useState();
    const url_get = "https://us-central1-atencion-conjunta-365122.cloudfunctions.net/create_user";

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    };
    
    const submitHandler = e => {
        e.preventDefault();
        setError('');
        try{
            axios.post(url_get, user)
            navigate('/login');
        }
        catch(error){
            setError(error.message);
        }
    };
    
    const handleLoginR = (e) => {
        navigate('/login');
    }

    return (
        <div className="w-full max-w-xs m-auto">
        {error && <Alert message={error}/>}
            <form onSubmit={submitHandler} className="bg-white
            shadpw-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="rol" className="block text-gray-700 text-sm font-fold mb-2 text-center">Rol</label>
                    <input type="rol" name="role" className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="admin-paciente" onChange={handleChange}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700 text-sm font-fold mb-2 text-center">Nombre</label>
                    <input type="nombre" name="name" className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nombre" onChange={handleChange}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="apellido" className="block text-gray-700 text-sm font-fold mb-2 text-center">Apellido</label>
                    <input type="apellido" name="lastname" className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Apellido" onChange={handleChange}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-fold mb-2 text-center">Correo</label>
                    <input type="email" name="email" className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Youremail@gmail.com" onChange={handleChange}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-fold mb-2 text-center">Contraseña</label>
                    <input type="password" name="password" id="password" className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="******" onChange={handleChange}/>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white
                font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Registrarse</button>
            </form>
                <div>
                    <form onSubmit={handleLoginR}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white
                    font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Acceder</button>
                    </form>
                </div> 
        </div>
    );
};


