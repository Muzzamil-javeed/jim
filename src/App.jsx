import { useState, useEffect } from "react";
import "./App.css";
import WOW from 'wowjs';
import Navigation from "./Routes/Navigation";

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);
  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
