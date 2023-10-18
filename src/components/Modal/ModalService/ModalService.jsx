import PropTypes from "prop-types";

import "./modalService.scss";

const ModalService = ({ service, iconClass }) => (
    // <div className="ModalEvent">
    <div className="service-item " id="modalEvent">
        <div className="service-item-inner">
            <div className="icon">
                <i className={iconClass}></i>
            </div>
            <h4>{service.title}</h4>
            <p>{service.modalDescription}</p>
            <ul>
                {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                        <i className="fas fa-check"></i>
                        {detail}
                    </li>
                ))}
            </ul>
            <a href={service.link.url}>{service.link.title}</a>
        </div>
    </div>
    // </div>
);

ModalService.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    event: PropTypes.any.isRequired,
};

export default ModalService;
