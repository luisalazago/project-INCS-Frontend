import './terminado.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class JuegoTerm extends Component {
  render() {
    return(
      <div className='windowT'>
          <div className='headerT'>
            <h1 className='tituloT'>Actividad {this.props.numero} Finalizada</h1>
          </div>
          <img src='https://i.pinimg.com/originals/c7/66/14/c7661497bbe0f1bdbb439bfe31122f87.jpg'></img>
          <Link class="buttonT" to='/juego'>Home</Link>
        </div>
    );
  }
}


export default JuegoTerm;