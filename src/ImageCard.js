import React from "react";

export default function ImageCard({imgUrl}) {
    return (
        <div className="image-card">
            <img src={imgUrl} alt="nasa of the day " style={{maxWidth: "385px"}} />
        </div>
    );
}