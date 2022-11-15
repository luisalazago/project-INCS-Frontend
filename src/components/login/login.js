import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "../alert/alert";
export function Login() {
    const [user, setUser] = useState({
        email:"",
        password:""
    });

    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password);
            navigate('/');
        }
        catch (error) {
            setError(error.message);
        }
    };

    const handleRegister = (e) => {
        navigate('/register');
    }

    return (
        <div className="w-full max-w-xs m-auto">
        {error && <Alert message={error}/>}
            <form onSubmit={handleSubmit} className="bg-white
            shadpw-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-fold mb-2 text-center">Correo</label>
                    <input type="email" name="email" placeholder="Youremail@gmail.com" className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-fold mb-2 text-center">Contraseña</label>
                    <input type="password" name="password" id="password" className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="******" onChange={handleChange}/>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white
                font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Acceder</button>
            </form>
                <div>
                    <form onSubmit={handleRegister}>
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white
                    font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Registrarse</button>
                    </form>
                </div> 
        </div>
    );
};