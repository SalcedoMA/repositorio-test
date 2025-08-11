import "../styles/home/Home.css"
import {
    Outlet,
    Link
} from "react-router-dom";

import Carousel from "../home/Carousel.jsx"
import SearchBar from "../home/SearchBar.jsx";
import CommunityCards from "../home/CommunityCards.jsx";
import ContributionBoxes from "../home/ContributionBox.jsx";
import AcademicImpact from "../home/AcademicImpact.jsx";

export default function Home() {
    return (
      <>
        <Carousel></Carousel>
        {/* BUSQUEDA */}
        <SearchBar></SearchBar>
        {/* COMUNIDADES */}
        <section className="communities">
          <div className="communities-title">
            <h1>Comunidades tematicas</h1>
            <p>Explora nuestras colecciones especializadas organizadas por áreas de investigación</p>
          </div>
          <div className="communities-container">
            <CommunityCards></CommunityCards>
          </div>
        </section>
        {/* CONTRIBUCIONES */}
        <section className="contributions">
          {/* header */}
          <div className="contributions-header">
            <div className="contributions-description">
              <h1>Envíos Recientes</h1>
              <p>Las últimas contribuciones académicas a nuestro repositorio</p>
            </div>
            <Link to="/contribuciones"><button className="contritbutions-see-all">Ver todos</button></Link>
          </div>
          {/* boxes */}
          <div className="contributions-container">
            <ContributionBoxes></ContributionBoxes>
          </div>
          <div className="contributions-pages">
            <button type="button" className="fwd-bck-buttons">←</button>
            <button type="button" className="page-number-button">1</button>
            <button type="button" className="page-number-button">2</button>
            <button type="button" className="page-number-button">3</button>
            <p>...</p>
            <button type="button" className="page-number-button">12</button>
            <button type="button" className="fwd-bck-buttons">→</button>
          </div>
        </section>
        <section className="academic-impact">
          <AcademicImpact></AcademicImpact>
        </section>
      </>
    );
  }
