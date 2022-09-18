import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          {/*En el path definimos un argumento que necesitamos, en este caso un id, heroID, etc... */}
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/dc" />} />

        </Routes>
      </div>
    </>
  )
}
