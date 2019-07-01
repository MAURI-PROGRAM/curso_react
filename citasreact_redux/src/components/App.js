import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {

  state = {
    citas: []
  }
  
  componentDidUpdate() {
      localStorage.setItem( 
          'citas', 
          JSON.stringify( this.state.citas ) 
      );
  }

  componentDidMount() {
      const citasLS = localStorage.getItem( 'citas' );
      if(citasLS) {
          this.setState({
              citas: JSON.parse(citasLS)
          });
      }   
  }

  crearCita = (infoCita) => {
  
      // tomar una copia del state actual 
      const citas = {...this.state.citas};

      // agregar el gasto a la variable
      citas[`citas${Date.now()}`] = infoCita;

      // agregar el gasto a etate
      this.setState({
          citas
      });
  }

  borrarCita = (id) => {
        // leer state
        const citas = {...this.state.citas}
        // borrarlo del objeto
        delete citas[id];

        console.log(citas);
        // actualizar state
        this.setState({
             citas
        })

  }

  render() {
    return (
      <div className="container">
        <Header 
          titulo={'Administrador de Pacientes Veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
              <AgregarCita
                  crearCita={this.crearCita}
              />
          </div>
          <div className="col-md-6">
              <ListaCitas
                citas = {this.state.citas}
                borrarCita = {this.borrarCita }
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
