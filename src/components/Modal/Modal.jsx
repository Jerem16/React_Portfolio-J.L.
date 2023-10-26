import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Modal = ({ opened, Content, closeIcon }) => {
    const modalClass = useSelector((state) => state.classes.addClass);
    const [isOpened, setIsOpened] = useState(opened);

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
