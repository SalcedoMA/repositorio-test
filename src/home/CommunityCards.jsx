import { useMemo } from 'react';
import documents from "../data/Documents.json";
import { Link } from "react-router-dom";
import '../styles/home/CommunityCards.css';

export default function CommunityCards() {
  const communities = useMemo(() => [
    {
      id: 1,
      icon: "/icons/drops.svg",
      title: "Hidrología Superficial",
      description: "Estudios de cuencas, caudales y recursos hídricos superficiales",
      docs: documents.filter(doc => doc.categoria === "Hidrología Superficial").length
    },
    {
      id: 2,
      icon: "/icons/cloud.svg",
      title: "Meteorología Aplicada",
      description: "Análisis climático, pronósticos y variabilidad meteorológica",
      docs: documents.filter(doc => doc.categoria === "Meteorologia Aplicada").length
    },
    {
      id: 3,
      icon: "/icons/thermometer.svg",
      title: "Climatología",
      description: "Estudios de cambio climático y tendencias a largo plazo",
      docs: documents.filter(doc => doc.categoria === "Climatologia").length
    },
    {
      id: 4,
      icon: "/icons/chart.svg",
      title: "Instrumentación",
      description: "Desarrollo y calibración de equipos de medición",
      docs: documents.filter(doc => doc.categoria === "Instrumentacion").length
    }
  ], []);

  return (
    <>
      {communities.map((community) => (
        <Link key={community.id} to="/" className='community-link'>
          <div className="community-card">
            <div className="card-header">
              <div className="icon-wrapper"><img className="community-icon" src={community.icon} alt=""></img></div>
              <p className="community-docs">{community.docs} docs</p>
            </div>
            <h1 className="community-title">{community.title}</h1>
            <p className="community-description">{community.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}