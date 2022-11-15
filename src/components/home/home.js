import { Routes, Route } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Inicio from "../inicio/inicio";
import NavBar from "../navbar/navbar";
import SideNavBar from "../sidebar/sidebar";
import "./home.css";

export function Home() {
    const {user, logout, loading} = useAuth();
    const handleLogout = async () => {
        await logout();
    }
    if (loading) return(<h1>loading</h1>);

    return(
        <div className="home">
            <NavBar user={user.name} logOut={handleLogout}/>
            <SideNavBar/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
            </Routes>
        </div>
    );
} 