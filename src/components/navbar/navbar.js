import './navbar.css';
import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends Component {
  render() {
    return(
      <Navbar variant="dark" className="navbar">
        <div className="bienvenido">
          <h2>Welcome {this.props.user}</h2>
        </div>
        <button onClick={this.props.logOut} className="blogout">
          Logout
        </button> 
      </Navbar>
    );
  }
}

export default NavBar;