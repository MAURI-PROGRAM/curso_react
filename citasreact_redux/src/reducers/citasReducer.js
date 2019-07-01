import { MOSTRAR_CITAS, AGREGAR_CITA, BORAR_CITA } from "../actions/types";

const initialState = {
  citas: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_CITAS:
      return {
        ...state
      };
      break;
    default:
      return {
        ...state
      };
      break;
  }
}
