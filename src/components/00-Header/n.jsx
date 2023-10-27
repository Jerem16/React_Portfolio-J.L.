import React from "react";
import { useDispatch } from "react-redux";
import { toggleClasses } from "../../redux/reducers/classesSlice";

function Header() {
    const dispatch = useDispatch();

    const handleClick = () => {
        // Dispatch l'action pour changer la classe lorsque l'élément est cliqué
        dispatch(toggleClasses("open")); // Remplacez "open" par la classe que vous souhaitez utiliser
    }

    return (
        <header>
            {/* ... autres éléments ... */}
            <ul>
                <li className="head-btn" onClick={handleClick}></li>
              
            </ul>
        </header>
    );
}

export default Header;