import React, { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ opened, Content, closeIcon }) => {
    const [isOpened, setIsOpened] = useState(opened);
    return (
        <>
            {isOpened && (
                <div className="modal">
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
