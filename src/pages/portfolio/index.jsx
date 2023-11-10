import React, { useState, lazy, Suspense } from "react";
import SectionContact from "./section_contact/SectionContact";
import SectionPortfolio from "./section_portfolio/SectionPortfolio";
import SectionServices from "./section_services/SectionServices";
import SectionHome from "./section_home/SectionHome";
import SectionAbout from "./section_about/SectionAbout";
import Header from "../../components/00-Header/00-Header";
import { useDispatch, useSelector } from "react-redux";
import { setModalContact } from "../../redux/reducers/classesSlice";



const LazyModal = lazy(() => import("../../components/Modal/Modal"));
const LazyPortfolioModalContent = lazy(() =>
    import("../../components/04-portfolio/PortfolioModalContent")
);
const LazyModalService = lazy(() =>
    import("../../components/Modal/ModalService/ModalService")
);
const LazyModalForm = lazy(() =>
    import("../../components/Modal/ModalForm/ModalForm")
);

function MainPortfolio() {
    const dispatch = useDispatch();
    const modalContact = useSelector((state) => state.classes.modalContact);

    const [selectedPortfolio, setSelectedPortfolio] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

    const openModalPortfolio = (data) => {
        setSelectedPortfolio(data);
    };
    const openModalService = (data) => {
        setSelectedService(data);
    };

    const closeModalContact = () => {
        dispatch(setModalContact(false));
    };
    const closeModal = () => {
        setSelectedPortfolio(null);
        setSelectedService(null);
    };

    return (
        <>
            <Header />
            <main className="main-content">
                <SectionHome />
                <SectionAbout />
                <SectionServices openModalService={openModalService} />
                <SectionPortfolio openModalPortfolio={openModalPortfolio} />
                <SectionContact />
                <Suspense fallback={<div>Loading...</div>}>
                    {selectedPortfolio && (
                        <LazyModal
                            opened={true}
                            Content={
                                <LazyPortfolioModalContent
                                    selectedPortfolio={selectedPortfolio}
                                    closeModal={closeModal}
                                />
                            }
                        />
                    )}
                    {selectedService && (
                        <LazyModal
                            opened={true}
                            Content={
                                <LazyModalService
                                    selectedService={selectedService}
                                    closeModal={closeModal}
                                />
                            }
                        />
                    )}
                    <LazyModal
                        opened={modalContact}
                        Content={
                            <LazyModalForm closeModal={closeModalContact} />
                        }
                    />
                </Suspense>
            </main>
        </>
    );
}

export default MainPortfolio;
