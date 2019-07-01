const redux = require("redux");

const createStore = redux.createStore;

//state inicial
const stateInicial = {
  usuarios: []
};
//reducer
//state y accion
const reducerPrincipal = (state = stateInicial, action) => {
  if (action.type === "AGREGAR_USUARIO") {
    return {
      ...state,
      usuarios: action.nombre
    };
  }
  if (action.type === "MOSTRAR_USUARIOS") {
    return {
      ...state
    };
  }
  return state;
};

//toma 3 paremetros: reducer , state ini, aplymiddleawere
const store = createStore(reducerPrincipal);

console.log(store.getState());
//dispatch : forma en qu se cambia el state
store.dispatch({ type: "AGREGAR_USUARIO", nombre: "Michael" });
console.log(store.getState());
store.dispatch({ type: "AGREGAR_USUARIO", nombre: "Michael" });
console.log(store.getState());
store.dispatch({ type: "MOSTRAR_USUARIOS" });
console.log(store.getState());
