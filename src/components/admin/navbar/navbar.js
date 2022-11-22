import './navbar.css';
import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return(
      <Navbar variant="dark" className="navbar">
        <div className="bienvenido">
          <h2>Bienvenido</h2>
        </div>
        <div>
          <button className='botonRegreso'>Volver</button>
        </div>
        <div className='Logout'>
            <Link to="/">
            Logout
            </Link>
        </div>
      </Navbar>
    );
  }
}

export default NavBar;
