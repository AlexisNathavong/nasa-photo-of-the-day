import React from "react";
import 'semantic-ui-css/semantic.min.css';
// import { NasaCard } from "./StyledWidgets";

export default function InfoCard({info}) {
    return (
        <div className="info-card">
            <h1>{info.title}</h1>

            <p>{info.explanation}</p>
            <p>{info.date}</p>
            
        </div>

    );
    
}