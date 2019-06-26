import React, { useState, useEffect } from "react";
import Pregunta from "./componente/Pregunta";
import Formulario from "./componente/Formulario";
import Listado from "./componente/Listado";
import ControlPresupuesto from "./componente/ControlPresupuesto";
function App() {
  const hoy = new Date();
  const fecha =
    hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [crearGasto, setcrearGasto] = useState(false);
  const [restante, guardarRestante] = useState(0);
  const [gasto, setgasto] = useState({});
  const [gastos, setgastos] = useState([]);
  useEffect(() => {
    if (crearGasto) {
      const listadoGastos = [...gastos, gasto];
      const presupuestorestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestorestante);
      setgastos(listadoGastos);
      setcrearGasto(false);
    }
  }, [gasto, gastos, restante, crearGasto]);

  const eliminarGasto = gastoDelete => {
    if (
      window.confirm("Desea eliminar el gasto : " + gastoDelete.nombreGasto)
    ) {
      const gastosActuales = [...gastos];
      const gastosfilter = gastosActuales.filter(
        gasto => gasto.id !== gastoDelete.id
      );
      setgastos(gastosfilter);
      guardarRestante(restante + gastoDelete.cantidadGasto);
    }
  };
  return (
    <div className="App container">
      <header>
        <h1> Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {preguntaPresupuesto ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
              guardarRestante={guardarRestante}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setgasto={setgasto} setcrearGasto={setcrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} eliminarGasto={eliminarGasto} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                  // alerta={alerta}
                />
              </div>
            </div>
          )}
        </div>
      </header>
      <p className="col-md-10 mx-auto" color='#FF0000'>
        Todos los derechos reservados Michael Merchán curso React&copy; {fecha}
      </p>
    </div>
  );
}

export default App;
