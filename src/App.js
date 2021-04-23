import './App.css';
import Header from "./components/header/Header.jsx";
import React from "react";
import Home from "./components/home/Home";

function App() {
    return (
        <div className="app">
            <Header />
            <Home />
            {/*Home*/}
        </div>
    );
}

export default App;
