import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Error404 from "./pages/Error404/Error404";
import Footer from "./components/Footer/Footer";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import GlobalStyle from "./utils/style/GlobalStyle";
// import "./assets/styles/main.scss";
// import "./main.scss";


function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            {/* <ThemeSelector /> */}
            <Routes>
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Home />} />
                    <Route path="/contact" element={<Home />} />
                </>
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
