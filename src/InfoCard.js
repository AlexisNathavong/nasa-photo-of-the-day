import React from "react";

export default function InfoCard({title} , {explanation}) {
    return (
        <div className="info-card">
            <h1>{title}</h1>

            <p>{explanation}</p>
            {/* <p>{date}</p> */}
            
        </div>

    );
    
}