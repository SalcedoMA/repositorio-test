import '../styles/home/ContributionBoxes.css'

// import contributions from "../data/Contributions.json"
import documents from "../data/Documents.json"
import doc from "../../public/icons//doc.svg"


// import { useState } from "react";
import {
    Link
  } from "react-router-dom";

  export default function ContributionBoxes() {

      return (
        <>
            {documents.slice(0,4).map((document) => (
                <div key={document.id} className="contribution-box">
                    <img className="contribution-icon" src={doc} alt="" />
                    <div className="contribution-info">
                        <h2 className="contribution-title">{document.nombre}</h2>
                        <div className="author-and-date">
                            <p className="contribution-author">{document.autor}</p>
                            <p className="contribution-date">{document.fecha}</p>
                        </div>
                        <div className="contribution-details">
                            <p className="contribution-type">{document.tipo}</p>
                            <p className="contribution-downloads">{document.downloads}</p>
                            <p className="contribution-views">{document.views}</p>
                        </div>
                    </div>
                    <div className="contribution-actions">
                    <button type="button" id="see-button">Ver</button>
                    <button type="button" id="download-button">Descargar</button>
                    </div>
                </div>
            ))}
            
        </>
      );
    }
  