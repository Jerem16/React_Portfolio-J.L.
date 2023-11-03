import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavToggler from "./components/00-Header/NavToggler";
// import GlobalStyle from "./utils/style/GlobalStyle";
import HomeLoader from "./pages/homeLoader/HomeLoader";
import { useSelector } from "react-redux";
import MainPortfolio from "./pages/portfolio";
import ScrollToTop from "./utils/ScrollToTopOnMount";
// import "./test.scss";
import "./assets/styles/main.scss";

function App() {
    const navToggler = useSelector((state) => state.classes.addClass);
    return (
        <BrowserRouter>
            <ScrollToTop>
                <div className={`${navToggler}`} id="top">
                    {/* <GlobalStyle /> */}
                    <NavToggler />
                    <Routes>
                        <>
                            <Route path="/home" element={<MainPortfolio />} />
                            <Route path="/" element={<HomeLoader />} />
                        </>
                    </Routes>
                </div>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
