import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    //Si hubo una pagina anterior (lastPath), sino lo mandamos a la ruta principal
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Duque Castro');

    navigate(lastPath, {
      replace: true,
    });
  }


  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>

    </div>
  )
}
