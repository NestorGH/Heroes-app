import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  //useMemo para guardar valores asi evitar se dispara otra vez la funcion
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  //Mapeamos el arreglo con la info de los heroes
  return (
    <ul className="row rows-cols-1 row-cols-md-3 g-3">
      {
        //Hacemos spread del hero para tomar todas las propiedades
        heroes.map(hero => (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        ))
      }

    </ul>
  )
}
