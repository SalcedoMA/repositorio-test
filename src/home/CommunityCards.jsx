import '../styles/home/CommunityCards.css'

import communities from "../data/Communities.json"

// import { useState } from "react";
import {
    Link
  } from "react-router-dom";

  export default function CommunityCards() {

      return (
        <>
            {communities.map((community) => (
              <Link key={community.id} to="/" >
                <div  className="community-card">
                  <div className="card-header">
                      <img className="community-icon" src={community.icon} alt=""></img>
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
  