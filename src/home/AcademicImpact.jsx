import '../styles/home/AcademicImpact.css'

import achievements from "../data/AcademicImpact.json"

// import { useState } from "react";
import {
    Link
  } from "react-router-dom";

  export default function AcademicImpact() {
      return (
        <>
            <h1>Nuestro impacto academico</h1>
            <p>Contribuyendo al avance de las ciencias hídricas y atmosféricas</p>
            <div className="academic-achievements">
                {achievements.map((achievement) => (
                    <div key={achievement.id} className="achievement-card">
                        <div className="icon-container"><img className="achievement-icon" src={achievement.icon} alt="" /></div>
                        <h2>{achievement.number}</h2>
                        <p>{achievement.description}</p>
                    </div>
                ))}
            </div>
        </>
      );
    }