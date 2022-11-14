import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Inicio from "../admin/inicio_admin/inicio";
import NavBar from "../admin/navbar/navbar";
import SideNavBar from "../admin/sidebar/sidebar";
import axios from "axios";
import "./home.css";

class Home extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    };

    componentDidMount(user_email) {
        axios
            .get("https://us-central1-atencion-conjunta-365122.cloudfunctions.net/get_user_by_email?email=" + toString(user_email))
            .then((response) => {
                this.setState({posts: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const {posts} = this.state;
        const {res, handleLogout, user} = checkLoading();
        this.componentDidMount(user.email);
        
        if(res) return(<h1>Cargando</h1>);
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
}

export default Home;
