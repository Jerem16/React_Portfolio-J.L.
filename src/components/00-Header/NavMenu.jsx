import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { nanoid } from "nanoid";
import LanguageSelector from "./01-LanguageSelector";
import { useDispatch, useSelector } from "react-redux";
import { setClass } from "../../redux/reducers/classesSlice";
import data from "../../assets/data/header.json";
import NavItem from "./NavItem";

function NavMenu({ navLinks, handleClick, language, id, startLinks }) {
    const dispatch = useDispatch();
    const initClass = useSelector((state) => state.classes.menuSwitcher);

    const checkIfNoActiveLinks = () => {
        dispatch(setClass(""));
    };

    return (
        <div>
            <ul className="nav" id={id}>
                <NavItem startLinks={startLinks} handleClick={handleClick} />
                {navLinks.map((link, index) => (
                    <li className="head-btn" key={nanoid()}>
                        <Link
                            rel="nofollow"
                            href={`#${data.navLinks[index].to}`}
                            activeClass="active-link"
                            spy={true}
                            smooth={true}
                            offset={data.navLinks[index].offset}
                            duration={500}
                            to={data.navLinks[index].to}
                            onClick={checkIfNoActiveLinks}
                        >
                            <i
                                className={`icon ${data.navLinks[index].icon}`}
                            ></i>
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
