import React, { useState, useEffect }from "react";
import axios from "axios";
import ImageCard from "./ImageCard";


export default function NasaGrid ({limit}) {
    
    const [nasa, setNasa] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=lDCOmPsqhPoaTU9BRz5OLeaM12SVlAAyqAhQBqcf&count=1')
        .then(response => {
            console.log(`nasa api`, response.data);

            console.log(setNasa);
            setNasa(response.data[0])
        });
    }, []);

    return (
    <div className= "nasa-grid">
        <ImageCard key={nasa.url} imgUrl={nasa.url} />
        
    </div>
    )
}