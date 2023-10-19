import PropTypes from "prop-types";
// import "../../../"
import "./modalPortfolio.scss";

const ModalPortfolio = ({ title, imagePath }) => (
    <div className="service-item " id="modalPortfolio">
        <div className="portfolio-item-inner shadow-dark">
            <img
                alt={title}
                src={require(`../../../assets/img/webSite/${imagePath}`)}
            />
        </div>
        {/* <h4>
            <img
                alt={item.logoPath}
                src={require(`../../assets/img/webSite/${item.logoPath}`)}
            />
        </h4> */}
    </div>
);

// ModalService.propTypes = {
//     service: PropTypes.object.isRequired,
// };

export default ModalPortfolio;
