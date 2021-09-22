import { types } from '../type/types';

const initialState = {
  citas: []
};

export default function CitesReducer(state = initialState, action) {
  switch(action.type) {
    case types.ADD:
      return {
        ...state,
        citas: [...state.citas, action.payload]
      }
    case types.DELETE:
      return {
        ...state,
        citas: state.citas.filter(cita => cita.id !== action.payload)
      }

    default:
      return state
  }
}

