import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Error404 from "./pages/Error404/Error404";
import GlobalStyle from "./utils/style/GlobalStyle";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
// import "./assets/styles/main.scss";
// import "./main.scss";
import { useSelector } from "react-redux";

function App() {
    // const currentTheme = useSelector((state) => state.theme.currentTheme);
    // document.documentElement.style.setProperty("--skin-color", currentTheme);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            {/* <ThemeSelector /> */}
            <main className="main-content">
                <Routes>
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                    </>

                    <Route path="*" element={<Error404 />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
