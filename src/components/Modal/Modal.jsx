import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ opened, Content, closeIcon }) => {
    const [isOpened, setIsOpened] = useState(opened);

    useEffect(() => {
        const adjustModalPosition = () => {
            const modal = document.querySelector(".modal");
            if (modal) {
                const screenHeight = window.innerHeight;
                // const modalHeight = modal.offsetHeight;
                const scrollY = window.scrollY || window.pageYOffset;

                const newTop = scrollY / screenHeight;
                const newTop1 = newTop * 100;

                modal.style.top = `${newTop1}vh`;
            }
        };

        if (opened) {
            // Utilisez le prop opened
            adjustModalPosition();
            window.addEventListener("resize", adjustModalPosition);
            window.addEventListener("scroll", adjustModalPosition);
        }

        return () => {
            window.removeEventListener("resize", adjustModalPosition);
            window.removeEventListener("scroll", adjustModalPosition);
        };
    }, [opened]);

    return (
        <>
            {opened && ( // Utilisez le prop opened
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

export default React.memo(Modal);
