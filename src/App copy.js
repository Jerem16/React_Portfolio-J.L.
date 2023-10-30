import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-Header/00-Header";
import NavToggler from "./components/00-Header/NavToggler";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Error404 from "./pages/Error404/Error404";
import GlobalStyle from "./utils/style/GlobalStyle";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
// import ScrollToTop from "./components/00-Header/ScrollToTop/ScrollToTop";
import { useSelector } from "react-redux";

// import "./main.scss";

function Test() {
    return (
        <>
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </>
    );
}

export default Test;
