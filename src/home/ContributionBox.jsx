import '../styles/home/ContributionBoxes.css'

import contributions from "../data/Contributions.json"

// import { useState } from "react";
import {
    Link
  } from "react-router-dom";

  export default function ContributionBoxes() {

      return (
        <>
            {contributions.map((contribution) => (
                <div key={contribution.id} className="contribution-box">
                    <img className="contribution-icon" src={contribution.icon} alt="" />
                    <div className="contribution-info">
                        <h2 className="contribution-title">{contribution.title}</h2>
                        <div className="author-and-date">
                            <p className="contribution-author">{contribution.author}</p>
                            <p className="contribution-date">{contribution.date}</p>
                        </div>
                        <div className="contribution-details">
                            <p className="contribution-type">{contribution.type}</p>
                            <p className="contribution-downloads">{contribution.downloads}</p>
                            <p className="contribution-views">{contribution.views}</p>
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
  