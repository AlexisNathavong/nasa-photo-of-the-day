import React from "react";
import "./App.css";
import NasaGrid from "./NasaGrid";


function App() {
  return (
    <div className="App">
      <h1>Nasa: Photo of the Day</h1>
      
      <h2>Enjoy these awesome pictures!</h2>
      <NasaGrid limit={10} />
    </div>
  );
}

export default App;
