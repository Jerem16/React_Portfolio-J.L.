import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavToggler from "./components/00-Header/NavToggler";
// import GlobalStyle from "./utils/style/GlobalStyle";
// import HomeLoader from "./pages/homeLoader/HomeLoader";
import { useSelector } from "react-redux";
import MainPortfolio from "./pages/portfolio";
import ScrollToTop from "./utils/ScrollToTopOnMount";
// import "./test.scss";
import "./assets/styles/main.scss";

function App() {
    const navToggler = useSelector((state) => state.classes.addClass);
    return (
        <ScrollToTop>
            <div className={`${navToggler}`} id="top">
                <NavToggler />
                <MainPortfolio />
            </div>
        </ScrollToTop>
    );
}

export default App;
