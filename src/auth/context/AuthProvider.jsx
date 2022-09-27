import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

// const initialState = {
//   logged: false,
// }

//Lectura del localStorage
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user, //Si el usuario existe
    user: user,
  }
}

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = '') => {

    const user = { id: 'ABC', name }  //La nueva info/estado
    const action = { type: types.login, payload: user, }  //El payload(la carga) sera el usuario

    localStorage.setItem('user', JSON.stringify(user)); //Creamos objeto en el localStorage
    dispatch(action);
  }

  const logout = () => {

    const action = { type: types.logout, };
    localStorage.removeItem('user');

    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login,  //Mandamos la funcion la cual tomaran los componetes hijos
      logout: logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}