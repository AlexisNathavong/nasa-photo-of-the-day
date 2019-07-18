import React from "react";
import "./App.css";
import NasaGrid from "./NasaGrid";
import 'semantic-ui-css/semantic.min.css';
import { Header } from "./StyledWidgets";


function App() {
  return (
    <div className="App">
      <Header>
        <h1>Nasa: Photo of the Day</h1>
      </Header>

      <NasaGrid />
    </div>
  );
}

export default App;
