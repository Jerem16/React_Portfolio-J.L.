import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/00-Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Error404 from "./pages/Error404/Error404";

import Footer from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />{" "}
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Home />} />
                    <Route path="/contact" element={<Home />} />
                </>
                {/* 
                {authenticated ? (
                    <></>
                ) : (
                    <Route path="*" element={<Error404 />} />
                )} 
                */}

                <Route path="*" element={<Error404 />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;
