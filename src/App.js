import React from "react";
import NavToggler from "./components/00-Header/NavToggler";
import { useSelector } from "react-redux";
import MainPortfolio from "./pages/portfolio";
import ScrollToTop from "./utils/ScrollToTopOnMount";
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
