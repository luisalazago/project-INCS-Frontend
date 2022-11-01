import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function Register() {
    const [user, setUser] = useState({
        email:"",
        password:""
    });

    const { signUp } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signUp(user.email, user.password);
            navigate('/login');
        }
        catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
        {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Youremail@gmail.com" onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="******" onChange={handleChange}/>
                <button>Register</button>
            </form>
        </div>
    );
};


