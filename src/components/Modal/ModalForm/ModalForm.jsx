import "./modalForm.scss";

const ModalForm = ({ title, description, description2 }) => (
    <div className="service-item " id="modalContact">
        <div className="portfolio-item-inner">
            <div className="modalMessage">
                <h4>{title}</h4>

                <p>
                    {description}
                    <br />
                    {description2}
                </p>
                {/* <p>{description2}</p> */}
            </div>
        </div>
    </div>
);

export default ModalForm;
