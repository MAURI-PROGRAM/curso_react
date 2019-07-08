import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import firebase from "firebase/app";
import "firebase/firestore";

//configurar firestore
const firebaseConfig = {
  apiKey: "---",
  authDomain: "---",
  databaseURL: "---",
  projectId: "--",
  storageBucket: "--",
  messagingSenderId: "--",
  appId: "--"
};

//inicializar firebase
firebase.initializeApp(firebaseConfig);

//configuracion de react-redux

const rrfConfig = {
  useerProfile: "users",
  useFirestoreForProfile: true
};

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

//state inicial
const inicialState = {};

//crear el store
const store = createStoreWithFirebase(
  rootReducer,
  inicialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
