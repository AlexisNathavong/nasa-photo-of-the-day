import React, { useState, useEffect }from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";

export default function NasaGrid ({limit}) {
    
    const [nasa, setNasa] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=lDCOmPsqhPoaTU9BRz5OLeaM12SVlAAyqAhQBqcf&count=1')
        .then(response => {
            console.log(`nasa api`, response.data);

            console.log(setNasa); 
            setNasa(response.data[0])
            console.log(response.data);
        });
    }, []);
        console.log(nasa);
    return (
        <div className= "nasa-grid">
            <ImageCard key={nasa.url} imgUrl={nasa.url} />
            <InfoCard title={nasa.title} explanation={nasa.explanation} />
            {/* {console.log(InfoCard)} */}

        </div> 
        
    )
}