const redux = require("redux");

const createStore = redux.createStore;

//state inicial
const stateInicial = {
  usuarios: []
};
//reducer
//state y accion
const reducerPrincipal = (state = stateInicial, action) => {
  return state;
};

//toma 3 paremetros: reducer , state ini, aplymiddleawere
const store = createStore(reducerPrincipal);
//dispatch : forma en qu se cambia el state

console.log(store.getState());
