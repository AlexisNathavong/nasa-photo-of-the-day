import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Title } from "./StyledWidgets";

export default function InfoCard({info}) {
    return (
        <div className="info-card">
            <Title>
                {info.title}
            </Title>
            <p>{info.explanation}</p>
            <p>{info.date}</p>
            
        </div>

    );
    
}