import React, { useState } from "react";
import PropTypes from "prop-types";
import "./modal.scss";

const Modal = ({ opened, Content, children, closeIcon }) => {
    const [isOpened, setIsOpened] = useState(opened);
    return (
        <>
            {children({ isOpened, setIsOpened })}
            {isOpened && (
                <div className="modal">
                    <div className="content">
                        {Content}
                        <button
                            type="button"
                            data-testid="close-modal"
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
    children: PropTypes.func.isRequired,
    closeIcon: PropTypes.node, // Ajoutez cette prop
};

export default Modal;
