import queryString from 'query-string'; //instalacion de terceros

import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm"
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate(); //Obtener la navegacion
  const location = useLocation(); //Localizacion del html

  const { q = '' } = queryString.parse(location.search); //Parseamos para solo tomar la parte del !q! del query
  const heroes = getHeroesByName(q);
  // console.log(query);
  const showSearch = (q.length === 0);  //Ya cuenta como booleano
  const showError = (q.length > 0) && heroes.length === 0;

  //El texto del buscador en el input. Asi mantenemos el texto en el input q esta en el query
  const { searchText, onInputChange } = useForm({
    searchText: q, 
  });

  const onSearchSubmit = (event) => {
    event.preventDefault(); //Evitar un full refresh

    navigate(`?q=${searchText}`); //Mandamos el texto del input al query
    // console.log({searchText});
  }


  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          {/*Cuando se mande el form llama la funcion q previene el full refresh */}
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}  //El valor sera el texto en el input
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>

          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>

      </div>

    </>

  )
}
