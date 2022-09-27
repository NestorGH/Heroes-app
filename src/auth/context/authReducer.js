import { types } from "../types/types";

//Los reducer no llaman ningun recurso externo, solo son funciones puras
//Se resuelven unicamente con su state y la accion

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state, //Regresamos el estado inicial
        logged: true, //Los nuevos estados
        user: action.payload
      };

    case types.logout:
      return {
        logged: false,
        //No hacemos uso del payload(carga) xq no ocupamos info para borrar
      };

    default:
      return state; //Si no se regresa un NUEVO estado, mandamos el estado inicial
  }
}