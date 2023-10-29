import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const ModalService = ({ service, iconClass }) => (
    <div className="service-item " id="modalService">
        <div className="service-item-inner">
            <div className="icon">
                <i className={iconClass}></i>
            </div>
            <h4>{service.title}</h4>
            <p>{service.modalDescription}</p>
            <ul>
                {service.details.map((detail, detailIndex) => (
                    <li key={nanoid()}>
                        <i className="fas fa-check"></i>
                        {detail}
                    </li>
                ))}
            </ul>
            <a href={service.link.url}>{service.link.title}</a>
        </div>
    </div>
);

ModalService.propTypes = {
    service: PropTypes.object.isRequired,
};
export default ModalService;
