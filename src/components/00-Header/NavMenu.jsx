import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { nanoid } from "nanoid";
import LanguageSelector from "./01-LanguageSelector";
import { useDispatch, useSelector } from "react-redux";
import {
    toggleClasses,
    setClass,
    addNavClass,
} from "../../redux/reducers/classesSlice";

function NavMenu({ navLinks, handleClick, language, id, startLinks }) {
    const dispatch = useDispatch();
    const initClass = useSelector((state) => state.classes.menuSwitcher);

    const checkIfNoActiveLinks = () => {
        dispatch(setClass("ok"));
    };

    useEffect(() => {
        const handlePageLoad = () => {
            const activeStartElements = document.querySelectorAll(
                ".aside .nav li a.active-link"
            );

            if (activeStartElements.length === 0) {
                dispatch(setClass("active-link"));
            }
        };
        window.onload = handlePageLoad;
    }, [dispatch]);

    return (
        <div>
            <ul className="nav" id={id}>
                <li className={`head-btn`} key={nanoid()}>
                    <Link
                        rel="nofollow"
                        href={`#${startLinks[0].to}`}
                        activeClass="active-link"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        to={startLinks[0].to}
                        className={initClass}
                        onClick={checkIfNoActiveLinks}
                    >
                        <i className={`icon ${startLinks[0].icon}`}></i>
                        <span onClick={handleClick}>{startLinks[0].text}</span>
                    </Link>
                </li>
                {navLinks.map((link) => (
                    <li className="head-btn" key={nanoid()}>
                        <Link
                            rel="nofollow"
                            href={`#${link.to}`}
                            activeClass="active-link"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            to={link.to}
                            onClick={checkIfNoActiveLinks}
                        >
                            <i className={`icon ${link.icon}`}></i>
                            <span onClick={handleClick}>{link.text}</span>
                        </Link>
                    </li>
                ))}
                <LanguageSelector text={language} />
            </ul>
        </div>
    );
}

export default NavMenu;
