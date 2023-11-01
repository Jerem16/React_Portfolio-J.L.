import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { setClass } from "../../redux/reducers/classesSlice";
import data from "../../assets/data/header.json";

function NavItem({ handleClick, startLinks }) {
    const dispatch = useDispatch();
    const initClass = useSelector((state) => state.classes.menuSwitcher);
    const handleSetActive = (to) => {
        if (to === "home") {
            console.log(`Link with target ${to} is now active.`);
            // Ajoutez votre logique pour mettre en surbrillance le lien actif vers "home".
        }
    };

    const checkIfNoActiveLinks = () => {
        // dispatch(setClass("active-link"));
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        const activeStartElements = document.querySelectorAll(
            ".aside .nav li a.active-link"
        );

        if (activeStartElements.length <= 0) {
            dispatch(setClass("active-link"));
        } else {
            dispatch(setClass(""));
        }
    }, [dispatch]);

    return (
        <li className={`head-btn`}>
            <Link
                rel="nofollow"
                href={`#${data.startLinks[0].to}`}
                activeClass="active-link"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to={data.startLinks[0].to}
                // className={initClass}
                onClick={checkIfNoActiveLinks}
                onSetActive={handleSetActive}
            >
                <i className={`icon ${data.startLinks[0].icon}`}></i>
                <span onClick={handleClick}>{startLinks[0].text}</span>
            </Link>
        </li>
    );
}

export default NavItem;
