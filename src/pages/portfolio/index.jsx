import React, { useState, lazy, Suspense } from "react";
import SectionContact from "./section_contact/SectionContact";
import SectionPortfolio from "./section_portfolio/SectionPortfolio";
import SectionServices from "./section_services/SectionServices";
import SectionHome from "./section_home/SectionHome";
import SectionAbout from "./section_about/SectionAbout";
import Header from "../../components/00-Header/00-Header";
import { useDispatch, useSelector } from "react-redux";
import { setModalContact } from "../../redux/reducers/classesSlice";
import PortfolioModalContent from "../../components/04-portfolio/PortfolioModalContent";
import ModalService from "../../components/Modal/ModalService/ModalService";
import ModalForm from "../../components/Modal/ModalForm/ModalForm";
import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";

const LazySectionAbout = lazy(() => import("./section_about/SectionAbout"));
const LazySectionServices = lazy(() =>
    import("./section_services/SectionServices")
);
const LazySectionPortfolio = lazy(() =>
    import("./section_portfolio/SectionPortfolio")
);
const LazySectionContact = lazy(() =>
    import("./section_contact/SectionContact")
);
const LazyModal = lazy(() => import("../../components/Modal/Modal"));
// const LazyPortfolioModalContent = lazy(() =>
//     import("../../components/04-portfolio/PortfolioModalContent")
// );
// const LazyModalService = lazy(() =>
//     import("../../components/Modal/ModalService/ModalService")
// );
// const LazyModalForm = lazy(() =>
//     import("../../components/Modal/ModalForm/ModalForm")
// );

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
                <Suspense fallback={<div>Loading...</div>}>
                    <LazySectionAbout />
                    <LazySectionServices openModalService={openModalService} />
                    <LazySectionPortfolio
                        openModalPortfolio={openModalPortfolio}
                    />
                    <LazySectionContact />
                    {selectedPortfolio && (
                        <Modal
                            opened={true}
                            Content={
                                <PortfolioModalContent
                                    selectedPortfolio={selectedPortfolio}
                                    closeModal={closeModal}
                                />
                            }
                        />
                    )}
                    {selectedService && (
                        <Modal
                            opened={true}
                            Content={
                                <ModalService
                                    selectedService={selectedService}
                                    closeModal={closeModal}
                                />
                            }
                        />
                    )}
                    <Modal
                        opened={modalContact}
                        Content={<ModalForm closeModal={closeModalContact} />}
                    />
                </Suspense>
            </main>
        </>
    );
}

export default MainPortfolio;
