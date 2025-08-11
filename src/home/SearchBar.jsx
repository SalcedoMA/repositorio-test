import '../styles/home/SearchBar.css'
// import { useState } from "react";
import {
    Outlet,
    Link
  } from "react-router-dom";

  export default function SearchBar() {
    //   const [imageIndex, setImageIndex] = useState(0);
  
      return (
        <>
            <section className="repository-search">
                <h1>Explora nuestro repositorio científico</h1>
                <div className="search-elements">
                    <input type="search" name="repositories" id="repositories" results="0"/>
                    <button type="button"><svg className="serach-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg> Buscar</button>
                </div>
            </section>
        </>
      );
    }
  