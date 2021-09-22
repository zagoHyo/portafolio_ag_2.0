import { types } from '../type/types';

export const Add = ( cita ) => {
  return {
    type: types.ADD,
    payload: cita
  };
};

export const Delete = (id) => {
  return {
    type: types.DELETE,
    payload: id
  };
};
