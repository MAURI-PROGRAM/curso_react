const redux = require("redux");

const createStore = redux.createStore;

//state inicial
const stateInicial = {
  usuarios: []
};
//reducer
//state y accion
const reducerPrincipal = (state, action) => {
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
const store = createStore(reducerPrincipal, stateInicial);

console.log(store.getState());
//suscribe o suscripcion
store.subscribe(() => {
  console.log("algo cambio...", store.getState());
});

//dispatch : forma en qu se cambia el state
store.dispatch({ type: "AGREGAR_USUARIO", nombre: "Michael" });

store.dispatch({ type: "AGREGAR_USUARIO", nombre: "Michael" });

store.dispatch({ type: "MOSTRAR_USUARIOS" });
