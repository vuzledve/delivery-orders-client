import {BrowserRouter, Link, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import React from "react";
import CreateOrder from "./components/CreateOrder";
import AppRouter from "./components/AppRouter";


function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>

  );
}

export default App;
