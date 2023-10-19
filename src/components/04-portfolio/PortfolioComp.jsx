import React, { useState, useEffect } from "react";
import portfolio_img from "../../assets/data/portfolio_img.json";
import { useSelector } from "react-redux";
import { loadLanguageData } from "../../utils/loadLanguageData";
import ModalPortfolio from "../Modal/ModalPortfolio/ModalPortfolio";
import Modal from "../Modal/Modal";
import CloseIcon from "../99-Svg_Icon/CloseIcon";

function PortfolioComp() {
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (data) => {
        setSelectedService(data);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    const selectedLanguage = useSelector((state) => state.language.language);
    const [languageData, setLanguageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadLanguageData(
                selectedLanguage,
                "portfolioContent.json"
            );
            setLanguageData(data);
        };

        fetchData();
    }, [selectedLanguage]);

    const data = languageData;

    if (!data || !languageData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="row_top">
                <div className="section-title">
                    <h2>{data.portfolioTitle}</h2>
                </div>
                <div className="portfolio-heading">
                    <h3>{data.lastProjectsTitle}</h3>
                </div>
            </div>
            <div className="row-center">
                <div className="service_container">
                    {portfolio_img.map((item, index) => (
                        <div
                            className="service-item"
                            key={index}
                            onClick={() => openModal(item)}
                        >
                            <div className="portfolio-item-inner shadow-dark">
                                <img
                                    alt={item.title}
                                    src={require(`../../assets/img/webSite/${item.imagePath}`)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col_end"></div>
            {selectedService && (
                <Modal
                    opened={true}
                    Content={
                        <div>
                            <ModalPortfolio
                                title={selectedService.title}
                                imagePath={selectedService.imagePath}
                            />
                            <button type="button" onClick={closeModal}>
                                <CloseIcon name="close" />
                            </button>
                        </div>
                    }
                >
                    {({ isOpened, setIsOpened }) => (
                        <button
                            type="button"
                            onClick={closeModal}
                            className="hidden"
                        ></button>
                    )}
                </Modal>
            )}
        </>
    );
}

export default PortfolioComp;
