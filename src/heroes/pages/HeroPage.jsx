import { useEffect, useMemo } from "react";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  //Hook de react-router para obtener los parametros en este caso de la ruta definida en el router
  const { id } = useParams();
  const imgUrl = `/assets/heroes/${id}.jpg`;
  const navigate = useNavigate();

  //useMemo para guardar valores asi evitar se dispara otra vez la funcion
  const hero = useMemo(() => getHeroById(id), [id]);  //Solo cuando el id cambi se dispara el callback


  const onNavigateBack = () => {
    //Definimos la ruta anterior (-1) como la ruta a navegar
    navigate(-1);
  }


  //Validamos que exista el heroe, sino navegar a otra pantalla
  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5 col animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={imgUrl}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher}</li>
          <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary"
          onClick={onNavigateBack}
        >
          Back
        </button>


      </div>

    </div>

  )
}
