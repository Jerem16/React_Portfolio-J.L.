import React from "react";
import SectionContact from "./section_contact/SectionContact";
import SectionPortfolio from "./section_portfolio/SectionPortfolio";
import SectionServices from "./section_services/SectionServices";
import SectionHome from "./section_home/SectionHome";
import SectionAbout from "./section_about/SectionAbout";
import Header from "../../components/00-Header/00-Header";

function MainPortfolio() {
    return (
        <>
            <Header />
            <main className="main-content">
                <SectionHome />
                <SectionAbout />
                <SectionServices />
                <SectionPortfolio />
                <SectionContact />
            </main>
        </>
    );
}

export default MainPortfolio;
