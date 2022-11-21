import './navbar.css';
import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class NavBarP extends Component {
  render() {
    console.log(this.props.usuario);
    return(
      <Navbar variant="dark" className="navbar">
        <div className="homeP">
            <a href="/">
                <img src="https://cf-00.iconduck.com/assets.00/home-icon-96x84-df6y33cw.png"/>
            </a>
        </div>
        <div className="bienvenido">
          <h2>Welcome {this.props.usuario}</h2>
          <div className="profile_icon">
            <img src="https://cf-00.iconduck.com/assets.00/person-icon-96x96-vq1zghnt.png" width="35" height="35"/>
          </div> 
        </div>
        <button onClick={this.props.logOut} className="blogout">
          Logout
        </button>
      </Navbar>
    );
  }
}

export default NavBarP;