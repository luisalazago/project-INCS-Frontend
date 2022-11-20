import './juego.css';
import imagen from '../img/juego.jpg'
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Juego extends Component {
  render() {
    return(
      <div className='window'>
        <div className='buton_container'>
          <Link className='buton_acc' to='jugar'>
            <img className='buton_img' src={imagen}></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default Juego;