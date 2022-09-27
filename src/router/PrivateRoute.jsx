import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoute = ({ children }) => {
   // const location = useLocation();
  // console.log(location);
  const { logged } = useContext(AuthContext);
  const {pathname, search} = useLocation();

  //Guardamos el ultimo path
  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath); //Establecemos un nuevo objeto en el localStorage


  return (logged)
    ? children  //Si es true tiene acceso a los hijos
    : <Navigate to={"/login"} />
}
