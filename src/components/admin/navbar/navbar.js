import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function NavBar() {
  const navigate = useNavigate();
  const handleHome = (e) => {
    navigate("/home");
  };
  return(
    <Navbar variant="dark" className="navbar">
      <div className="bienvenido">
        <h2>Bienvenido</h2>
      </div>
      <div className="centrar_boton_regreso">
        <Button className='botonRegreso' onClick={handleHome}>Inicio</Button>
      </div>
      <div className='Logout'>
        <Link to="/">
          Logout
        </Link>
      </div>
    </Navbar>
  );
}
