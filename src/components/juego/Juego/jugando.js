import './jugando.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Jugando extends Component {
  render() {
    return(
      <div className='window'>
          <div className='header'>
            <h1 className='titulo'>Actividad {this.props.numero}</h1>
            <div className='progres_bar'></div>
          </div>
            <div className='form'>
              <div className='grid_container'>
                <div className={this.state.myClass[0]} onClick={() => this.cambiar(1)}>
                  <img src={this.state.actividades[this.state.index].img1}></img>
                  <div name='actividad' >Imagen 1</div>
                </div>
                <div className={this.state.myClass[1]} onClick={() => this.cambiar(2)}>
                  <img src={this.state.actividades[this.state.index].img2}></img>
                  <div name='actividad' >Imagen 2</div>
                </div>
                <div className={this.state.myClass[2]} onClick={() => this.cambiar(3)}>
                  <img src={this.state.actividades[this.state.index].img3}></img>
                  <div name='actividad'>Imagen 3</div>
                </div>
                <div className={this.state.myClass[3]} onClick={() => this.cambiar(4)}>
                  <img src={this.state.actividades[this.state.index].img4}></img>
                  <div name='actividad'>Imagen 4</div>
                </div>
                {this.state.index == this.state.actividades.length - 1 ?
                  <Link class="button" onClick={() => this.finalizar()} to='/juego/terminado'>Terminar Actividad</Link>
                  : <div class="button" onClick={() => this.verificar()}>Siguiente</div>
                }
              </div>
            </div>
        </div>
    );
  }

  constructor(props){
    super(props);
    this.state = {
      index: 0,
      actual: 0,
      correcta: 0,
      myClass: ["item", "item", "item", "item"],
      actividades: [{
                  img1: "data:image/jpeg;base64,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",
                  img2: "data:image/jpeg;base64,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",
                  img3: "data:image/jpeg;base64,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",
                  img4: "data:image/jpeg;base64,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",
                  correcta: "1"
                  },
                  {
                    
                    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaON2BEnq49v9aLOstCRc00rDVni05mVi59hCDosk&s",
                    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaON2BEnq49v9aLOstCRc00rDVni05mVi59hCDosk&s",
                    img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaON2BEnq49v9aLOstCRc00rDVni05mVi59hCDosk&s",
                    img4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaON2BEnq49v9aLOstCRc00rDVni05mVi59hCDosk&s",
                    correcta: 2
                  }
                  ]
                }
  }

  componentWillUnmount(){
    this.setState( { } );
	}

  cambiar(valor){
    var i;
    var slides = this.state.myClass;
    for (i = 0; i < slides.length; i++) {
      slides[i] = "item";
    }
    slides[valor-1] += " green";
    this.setState( {actual: valor,
      myClass: slides} );
    console.log(this.state)
  }

  temp(){
    if(this.state.actividades[this.state.index].correcta == this.state.actual){
      this.setState( {correcta: this.state.correcta+1} );
    }
  }
  verificar(){
    this.temp();
    if(this.state.actual != 0){
      this.setState( {index: this.state.index+1,
                      actual: 0,
                      myClass: ["item", "item", "item", "item"]});
    }

    console.log(this.state)
  }

  finalizar(){
    this.temp();

  }
}


export default Jugando;