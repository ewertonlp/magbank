import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import "./App.scss";


const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
    </div>
  );


export default App;
