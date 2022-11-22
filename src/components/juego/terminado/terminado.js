import './terminado.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import felicidades from './felicidades.png';

class JuegoTerm extends Component {
  render() {
    return(
      <div className='windowT'>
          <div className='headerT'>
            <h1 className='tituloT'>Actividad {this.props.numero} Finalizada</h1>
          </div>
          <img src={felicidades}></img>
          <Link class="buttonT" to='/juego'>Home</Link>
        </div>
    );
  }
}


export default JuegoTerm;