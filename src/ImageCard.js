import React from "react";

export default function ImageCard({imgUrl}) {
    return (
        <div className="image-card">
            <img src={imgUrl} style={{maxWidth: "175px"}} />
        </div>
    );
}