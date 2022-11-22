import './juego.css';
import imagen from '../img/juego.jpg'
import { Link } from 'react-router-dom';


export function Juego () {
  return (
    <div className='barra'>
      <div className='window'>
        <div className='buton_container'>
          <Link className='buton_acc' to='jugar'>
            <img className='buton_img' src={imagen}></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Juego;