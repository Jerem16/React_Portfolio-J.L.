import React from "react";
import Button, { BUTTON_TYPES } from "../Button/Button";
import HomeTitle from "./HomeTitle";

const HomeInfo = ({
    welcome,
    name,
    presentation,
    titleDescription,
    description,
    additionalDescription,
    quote,
    hireButtonText,
}) => {
    const buttons = {
        href: "/contact",
        class: "hire-me",
    };
    return (
        <div className="home-info">
            <HomeTitle welcome={welcome} />
            <article className="home-card">
                <span className="home-card_group">
                    <h3 className="presentation_title">
                        <span>{presentation}</span>
                    </h3>
                    <h3 className="presentation_typing">
                        <span className="typing"></span>
                    </h3>
                </span>
                <div className="home-card-content">
                    <p className="home-card-content_description">
                        <strong>
                            <span className="home-quote">
                                <span className="reverse">,,</span>
                                {titleDescription}
                            </span>
                        </strong>
                        <br />
                        <span className="quote-description">{description}</span>
                    </p>
                    <div className="content-inner">
                        <p className="content-inner_description">
                            {additionalDescription}
                        </p>
                        <blockquote className="content-inner_quote">
                            <q>{quote}</q>
                        </blockquote>
                    </div>
                </div>
            </article>
            <Button
                href="#contact"
                type={BUTTON_TYPES.DOWNLOAD}
                btnName={hireButtonText}
                to={buttons.href}
                className={buttons.class}
            >
                {hireButtonText}
            </Button>
        </div>
    );
};

export default React.memo(HomeInfo);
