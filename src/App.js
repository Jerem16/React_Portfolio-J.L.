import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-Header/00-Header";
import NavToggler from "./components/00-Header/NavToggler";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Error404 from "./pages/Error404/Error404";
import GlobalStyle from "./utils/style/GlobalStyle";
import HomeLoading from "./pages/HomeLoading/HomeLoading";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
// import ScrollToTop from "./components/00-Header/ScrollToTop/ScrollToTop";
import { useSelector } from "react-redux";
import Test from "./App copy";

// import "./main.scss";

function App() {
    const navToggler = useSelector((state) => state.classes.addClass);
    return (
        <BrowserRouter>
            <div className={`${navToggler}`}>
                <GlobalStyle />
                <NavToggler />
                <Header />
                <main className="main-content">
                    <Routes>
                        <>
                            <Route path="/home" element={<Test />} />
                            <Route path="/" element={<HomeLoading />} />
                        </>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
