import React from "react";
import { nanoid } from "nanoid";

const ItemLi = ({ description, entry }) => {
    return (
        <ul className={`ul-anime open`}>
            {entry.description.itemLi.map((item, itemIndex) => (
                <li
                    className={`ul-anime open`}
                    key={nanoid()}
                    style={{
                        transitionDelay: `${itemIndex * 0.1}s`,
                    }}
                >
                    <i className="fas fa-check"></i>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default React.memo(ItemLi);
