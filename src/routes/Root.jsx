import {
    Outlet,
    Link
  } from "react-router-dom";

import hidrometLogo from "../assets/ddih-logo.png"
import logo from "../assets/rain.svg"
import "../styles/Root.css"

export default function Root() {
    return (
      <>
        <header>
          <Link to={"/"} className="logo-link">
            <img className="logo" src={logo} alt="" />
            <div className="logo-text">
              <h1>ALUVION</h1>
              <p>Hidrologia y meteorologia</p>
            </div>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to={'productos'}>Productos</Link>
              </li>
              <li>
                <Link to={'servicios'}>Servicios</Link>
              </li>
              <li>
                <Link to={'acerca-de'}>Acerca de nosotros</Link>
              </li>
              <li>
                <Link to={'contacto'}>Contacto</Link>
              </li>
          </ul>
        </nav>
        <Link to={"/"}><img className="hidromet-logo" src={hidrometLogo} alt="hidromet logo" /></Link>
        </header>
        {/* <hr className="separator"></hr> */}
        <main>
          <Outlet>

          </Outlet>
        </main>
        <footer>
          <div className="references">
            <div className="summary">
              <div className="summary-title">
                <img className="summary-logo" src={logo} alt="" />
                <div className="summary-text">
                  <h1>ALUVION</h1>
                  <p>Hidrologia y meteorologia</p>
                </div>
              </div>
              <div className="summary-description">
                <p>Repositorio académico institucional especializado en investigación hidrológica y meteorológica, promoviendo el acceso abierto al conocimiento científico.</p>
              </div>
            </div>
            <div className="links">
              <div className="navigation">
                <h2>Navegación</h2>
                <ul>
                  <li><Link to="/">Inicio</Link></li>
                  <li><Link to="/comunidades">Comunidades</Link></li>
                  <li><Link to="/buscar">Buscar</Link></li>
                  <li><Link to="/estadisticas">Estadísticas</Link></li>
                  <li><Link to="/estaciones">Estaciones</Link></li>
                </ul>
              </div>
              <div className="resources">
                <h2>Recursos</h2>
                <ul>
                  <li><Link to="/ayuda">Ayuda</Link></li>
                  <li><Link to="/politicas">Políticas</Link></li>
                  <li><Link to="/contacto">Contacto</Link></li>
                  <li><Link to="/api">API</Link></li>
                  <li><Link to="/metadatos">Metadatos</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© 2024 Repositorio Académico de Hidrología y Meteorología. Todos los derechos reservados.</p>
          </div>
        </footer>
      </>
    );
  }
