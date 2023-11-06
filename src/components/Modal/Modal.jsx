import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ opened, Content, closeIcon }) => {
    const [isOpened, setIsOpened] = useState(opened);

    useEffect(() => {
        // Fonction pour ajuster la position de la modale
        const adjustModalPosition = () => {
            const modal = document.querySelector(".modal");
            if (modal) {
                const screenHeight = window.innerHeight;
                const modalHeight = modal.offsetHeight;
                const scrollY = window.scrollY || window.pageYOffset;

                // Calculez la nouvelle position en fonction de la taille de l'écran et de la position de défilement
                const newTop = scrollY / screenHeight;
                const newTop1 = newTop * 100;

                // Appliquez la nouvelle position à la modale
                modal.style.top = `${newTop1}vh`;
            }
        };

        if (isOpened) {
            // Appelez la fonction lors de l'ouverture de la modale et lors du redimensionnement de la fenêtre
            adjustModalPosition();
            window.addEventListener("resize", adjustModalPosition);
            window.addEventListener("scroll", adjustModalPosition);
        }

        return () => {
            // Nettoyez les écouteurs d'événements lorsque la modale est fermée
            window.removeEventListener("resize", adjustModalPosition);
            window.removeEventListener("scroll", adjustModalPosition);
        };
    }, [isOpened]);

    return (
        <>
            {isOpened && (
                <div className={`modal`}>
                    <div className="content">
                        {Content}
                        <button
                            type="button"
                            onClick={() => setIsOpened(false)}
                        >
                            {closeIcon}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

Modal.defaultProps = {
    opened: false,
};

Modal.propTypes = {
    opened: PropTypes.bool,
    Content: PropTypes.node.isRequired,
};

export default Modal;
